import { CouponVerificationComponent } from '../coupon-verification/coupon-verification.component';

import { MatDialog } from '@angular/material';
import { environment } from './../../../environments/environment';

import { Router } from '@angular/router';
import { CampaignService } from './../services/campaign.service';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';
import { calcBindingFlags } from '@angular/core/src/view/util';

declare const $: any;

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.scss']
})
export class CampaignCardComponent implements OnInit {
  rejectedSign;
  rejectedBtn = false;
  archivedBtn = false;
  btnArchived = false;
  date = new Date();
  currentDate = this.date.toISOString();
  @Input()
  data;

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    // if (this.data['endDate'] < this.currentDate) {
    //   this.btnArchived = true;
    // }
    // if (this.data['isRejected']) {
    //   this.rejectedBtn = true;
    // }
    if (this.data['endDate'] < this.currentDate || this.data['isRejected']) {
      this.rejectedBtn = true;
      if (this.data['isRejected']) {
        this.rejectedSign = true;
      }
    }
  }

  notApprovedMessage() {
    swal({
      type: 'error',
      text: 'Not Approved yet, Contact admins',
      title: 'Not Approved Yet'
    });
  }

  // verifyCoupnCodeFn(campaignId) {
  //   console.log('-----------------');
  //   console.log(campaignId);
  verifyCoupnCodeFn(): void {
    const dialogRef = this.dialog.open(CouponVerificationComponent, {
      width: '500px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // swal({
  //   title: 'Enter Coupon Code',
  //   html:
  //     '<div class="form-group">' +
  //     '<input id="input-field" type="text" class="form-control" />' +
  //     '</div>',
  //   type: 'warning',
  //   showCancelButton: true,
  //   confirmButtonText: 'Validate',
  //   cancelButtonText: 'Cancel',
  //   confirmButtonClass: 'btn btn-success',
  //   cancelButtonClass: 'btn btn-danger',
  //   buttonsStyling: false
  // }).then(result => {
  //   if (result.value) {
  //     this.campaignService
  //       .verifyCouponCode(campaignId, $('#input-field').val())
  //       .subscribe(
  //         res => {
  //           swal({
  //             title: 'coupon code verified',
  //             type: 'success',
  //             confirmButtonClass: 'btn btn-success',
  //             buttonsStyling: false
  //           }).catch(swal.noop);
  //         },
  //         err => {
  //           swal({
  //             title: 'NOT verified',
  //             text: err['message'],
  //             type: 'error',
  //             confirmButtonClass: 'btn btn-info',
  //             buttonsStyling: false
  //           }).catch(swal.noop);
  //         }
  //       );
  //   } else {
  //     swal({
  //       title: 'Cancelled',
  //       text: 'you did not run validation',
  //       type: 'error',
  //       confirmButtonClass: 'btn btn-info',
  //       buttonsStyling: false
  //     }).catch(swal.noop);
  //   }
  // });
  // }

  activateAgainFn(campaignId) {
    this.router.navigate(['/main/campaign/create']);
    environment.campaignIdToReActivate = campaignId;
    environment.navigatedFromArchived = true;
  }
}
