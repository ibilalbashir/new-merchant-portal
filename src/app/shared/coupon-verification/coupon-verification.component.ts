import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { CampaignService } from './../services/campaign.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Inject } from '@angular/core';
import swal from 'sweetalert2';

export interface DialogData {
  id: string;
}

@Component({
  selector: 'app-coupon-verification',
  templateUrl: './coupon-verification.component.html',
  styleUrls: ['./coupon-verification.component.scss']
})
export class CouponVerificationComponent implements OnInit {
  verifyForm: FormGroup;
  cId: string;
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

  ngOnInit() {}
  verifyCouponCode() {
    this.campaignService
      .verifyCouponCode(this.cId, this.verifyForm.get('couponCode').value)
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
