import { inject } from '@angular/core/testing';
import { DatePipe } from '@angular/common';
import { CurrentComponent } from './../current/current.component';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CampaignService } from './../../shared/services/campaign.service';
import { Component, OnInit, Inject } from '@angular/core';

declare const $: any;

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss'],
  providers: [DatePipe]
})
export class ArchiveComponent implements OnInit {
  $getCampaign: Observable<object>;
  currentDate: any;
  campaignEndDate: any;
  constructor(
    private campaignService: CampaignService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  // transformDate(currentDate): String {
  //   return this.datePipe.transform(currentDate, 'yyyy-MM-dd'); // whatever format you need.
  // }

  ngOnInit() {
    // this.transformDate(this.currentDate);
    console.log(this.currentDate);

    // this.campaignService.getCampaigns().subscribe(
    //   res => {
    //     this.currentDate = this.transformDate(res['endDate']);
    //     // this.currentDate = res['endDate'].toLocaleDateString();
    //     alert(this.currentDate);
    //   },
    //   err => {}
    // );
    this.$getCampaign = this.campaignService.getArchiveCampaigns();

    // this.campaignService.getArchiveCampaigns().subscribe(
    //   res => {
    //     this.campaignEndDate = res['endDate'];

    //     console.log('camapaignEndDate', this.campaignEndDate);
    //   },
    //   err => {}
    // );
  }
}
