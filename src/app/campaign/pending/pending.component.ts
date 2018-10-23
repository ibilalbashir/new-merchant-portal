import { CampaignService } from './../../shared/services/campaign.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.scss']
})
export class PendingComponent implements OnInit {
  $getCampaign: Observable<object>;

  constructor(private campaignService: CampaignService) {}

  ngOnInit() {
    this.$getCampaign = this.campaignService.getPendingCampaigns();
  }
}
