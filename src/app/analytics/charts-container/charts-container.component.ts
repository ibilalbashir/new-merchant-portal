import { CampaignService } from './../../shared/services/campaign.service';
import { AnalyticsService } from './../../shared/services/analytics.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts-container',
  templateUrl: './charts-container.component.html',
  styleUrls: ['./charts-container.component.scss']
})
export class ChartsContainerComponent implements OnInit {
  $getBranches: Observable<object>;
  $getCampaigns: Observable<object>;
  selectedCampagin: any;
  selectedBranch: any;

  user = JSON.parse(localStorage.getItem('user'));

  merchantId = this.user['userId'];

  constructor(
    private analyticsService: AnalyticsService,
    private campaignService: CampaignService
  ) {}

  ngOnInit() {
    this.$getBranches = this.analyticsService.getBranches(this.merchantId);
    this.$getCampaigns = this.campaignService.getCampaigns();
  }
  campaignSelectionFn(event: any) {
    console.log('counter');
    this.selectedCampagin = event['source'].value;
    console.log('Selected campaign is', this.selectedCampagin);
  }
  branchSelectionFn(event: any) {
    this.selectedBranch = event.value;
  }
}
