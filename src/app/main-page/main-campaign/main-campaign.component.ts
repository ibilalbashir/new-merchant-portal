import { CampaignDetailComponent } from './../../shared/campaign-detail/campaign-detail.component';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit } from '@angular/core';
import { CouponVerificationComponent } from 'app/shared/coupon-verification/coupon-verification.component';

@Component({
  selector: 'app-main-campaign',
  templateUrl: './main-campaign.component.html',
  styleUrls: ['./main-campaign.component.scss']
})
export class MainCampaignComponent implements OnInit {
  $getCampaign: Observable<object>;
  constructor(
    private campaignService: CampaignService,
    private router: Router,
    public dialog: MatDialog,
    public detailsDialog: MatDialog
  ) {}

  ngOnInit() {
    this.$getCampaign = this.campaignService.getCampaigns();
  }

  openDialog(row): void {
    const dialogRef = this.dialog.open(CouponVerificationComponent, {
      width: '500px',
      data: { id: row.id }
    });
  }
  showDetailsFn(row): void {
    const dialogRef = this.dialog.open(CampaignDetailComponent, {
      width: '500px',
      data: row
    });
  }
}
