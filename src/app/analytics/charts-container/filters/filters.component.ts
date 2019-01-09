import { CampaignService } from './../../../shared/services/campaign.service';
import { AnalyticsService } from './../../../shared/services/analytics.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styleUrls: ['./filters.component.scss']
})
export class FiltersComponent implements OnInit {
  $getBranches: Observable<object>;
  $getCampaigns: Observable<object>;

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
}
