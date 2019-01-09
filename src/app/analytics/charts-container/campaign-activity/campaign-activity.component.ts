import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-campaign-activity',
  templateUrl: './campaign-activity.component.html',
  styleUrls: ['./campaign-activity.component.scss']
})
export class CampaignActivityComponent implements OnInit {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Camapign Activity',
        subCaption: '',
        xAxisName: 'Day',
        yAxisName: 'Activity',
        lineThickness: '2',
        theme: 'fusion'
      },
      data: [
        {
          label: '12th april',
          value: '15123'
        },
        {
          label: '13th april',
          value: '14233'
        },
        {
          label: '14th april',
          value: '23507'
        },
        {
          label: '15th april',
          value: '9110'
        },
        {
          label: '16th april',
          value: '15529'
        },
        {
          label: '17th april',
          value: '20803'
        },
        {
          label: '18th april',
          value: '19202'
        }
      ],
      trendlines: [
        {
          line: [
            {
              startvalue: '18500',
              color: '#1aaf5d',
              displayvalue: '',
              valueOnRight: '1',
              thickness: '2'
            }
          ]
        }
      ]
    };
  }

  ngOnInit() {}
}
