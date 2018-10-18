import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {
  $getCampaign: Observable<object>;
  constructor(
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit() {
    this.$getCampaign = this.campaignService.getCampaigns();
  }
  CreateCampaign() {
    this.router.navigateByUrl('/main/campaign/create');
  }
}
