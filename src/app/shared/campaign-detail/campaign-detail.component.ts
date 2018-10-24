import { TimelineRoutes } from './../../timeline/timeline.routing';
import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

export interface DialogData {
  title: any;
  displayImage: any;
  description: any;
  termsAndConditions: any;
  endDate: any;
  startDate: any;
}

@Component({
  selector: 'app-campaign-detail',
  templateUrl: './campaign-detail.component.html',
  styleUrls: ['./campaign-detail.component.scss']
})
export class CampaignDetailComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<CampaignDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}
}
