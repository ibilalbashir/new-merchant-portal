import { CampaignDetailComponent } from './../campaign-detail/campaign-detail.component';
import { CouponVerificationComponent } from '../coupon-verification/coupon-verification.component';

import { MatDialog } from '@angular/material';
import { environment } from './../../../environments/environment';

import { Router } from '@angular/router';
import { CampaignService } from './../services/campaign.service';
import { Component, OnInit, Input } from '@angular/core';
import swal from 'sweetalert2';

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
  campaignId: String;
  @Input()
  data;

  constructor(
    private campaignService: CampaignService,
    private router: Router,
    public dialog: MatDialog,
    public detailsDialog: MatDialog
  ) {}

  ngOnInit() {
    // if (this.data['endDate'] < this.currentDate) {
    //   this.btnArchived = true;
    // }
    // if (this.data['isRejected']) {
    //   this.rejectedBtn = true;
    // }
    this.campaignId = this.data['id'];
    // console.log('idddd', this.camapignId);
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
      width: '500px',
      data: { id: this.campaignId }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  showDetailsFn(): void {
    const dialogRef = this.dialog.open(CampaignDetailComponent, {
      width: '500px',
      data: this.data
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  activateAgainFn(campaignId) {
    this.router.navigate(['/main/campaign/create']);
    environment.campaignIdToReActivate = campaignId;
    environment.navigatedFromArchived = true;
  }
}
