import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CampaignService } from './../services/campaign.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import swal from 'sweetalert2';
import { Observable } from 'rxjs/internal/Observable';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-coupon-verification',
  templateUrl: './coupon-verification.component.html',
  styleUrls: ['./coupon-verification.component.scss']
})
export class CouponVerificationComponent implements OnInit {
  selectionText;
  branchObj$: Observable<object>;
  selectedBranch: any;
  verifyForm: FormGroup;
  cId: string;
  selectedIndex = -1;
  constructor(
    private formBuilder: FormBuilder,
    private campaignService: CampaignService,
    public dialogRef: MatDialogRef<CouponVerificationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {
    this.cId = data.id;
    this.verifyForm = formBuilder.group({
      couponCode: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.branchObj$ = this.campaignService.getBranches();
  }
  selectBranch(index) {
    this.selectionText = '';
    this.selectedIndex = index;

    this.branchObj$.subscribe(res => {
      this.selectedBranch = res[index]['id'];
      console.log('current select branch', res[index]['id']);
    });
  }
  verifyCouponCode() {
    console.log('selected branch', this.selectedBranch);
    if (this.selectedBranch === undefined) {
      this.selectionText = '*Please Select your branch\n';
      console.log('select a branch first');
    } else {
      if (this.verifyForm.get('couponCode').value === '') {
        swal('Please Enter Coupon code');
      } else {
        this.campaignService
          .verifyCouponCode(
            this.cId,
            this.verifyForm.get('couponCode').value,
            this.selectedBranch
          )
          .subscribe(
            res => {
              console.log(res);
              swal({
                type: 'success',
                title: 'Verified',
                text: 'Coupon Code is Valid'
              });
              this.verifyForm.get('couponCode').setValue('');
            },
            err => {
              console.log(err['error'].error.message);
              swal({
                type: 'error',
                title: 'Oops...',
                text: err['error'].error.message
              });

              this.verifyForm.get('couponCode').setValue('');
            }
          );
      }
    }
  }
}
