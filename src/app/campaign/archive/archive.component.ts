import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  $getCampaign: Observable<object>;
  constructor(
    private campaignService: CampaignService,
    private router: Router
  ) {}

  ngOnInit() {
    this.$getCampaign = this.campaignService.getArchiveCampaigns();
  }
}
