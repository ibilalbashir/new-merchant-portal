import { map } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';

import { AnalyticsService } from './../../../shared/services/analytics.service';

@Component({
  selector: 'app-time-visualization',
  templateUrl: './time-visualization.component.html',
  styleUrls: ['./time-visualization.component.scss']
})
export class TimeVisualizationComponent implements OnInit {
  obj;

  merchantId;
  dataSource = {
    chart: {
      caption: 'Time Visualization',
      subCaption: '',
      xAxisName: 'Day',
      yAxisName: 'Coupons',
      lineThickness: '2',
      theme: 'fusion'
    },
    data: [
      {
        label: '10AM-12PM',
        value: 0
      },
      {
        label: '12PM-2PM',
        value: 0
      },
      {
        label: '2PM-4PM',
        value: 0
      },
      {
        label: '4PM-6PM',
        value: 0
      },
      {
        label: '6PM-8PM',
        value: 0
      },
      {
        label: '8PM:10PM',
        value: 0
      },
      {
        label: '10PM-12PM',
        value: 0
      },
      {
        label: '12AM-2AM',
        value: 0
      }
    ],
    trendlines: [
      {
        line: [
          {
            startvalue: '1',
            color: '#1aaf5d',
            displayvalue: '',
            valueOnRight: '1',
            thickness: '2'
          }
        ]
      }
    ]
  };
  $campaignsWithCoupons;
  couponsArray = [];
  dates = [];

  constructor(private analyticsService: AnalyticsService) {}

  ngOnInit() {
    const temp = JSON.parse(localStorage.getItem('user'));
    this.merchantId = temp['userId'];

    this.$campaignsWithCoupons = this.analyticsService.getCampaignsWithCoupons(
      this.merchantId
    );

    this.$campaignsWithCoupons.subscribe(
      res => {
        const mapped = Object.keys(res).map(key => ({
          value: res[key]
        }));
        console.log('mapped is', mapped);
        mapped.forEach(element => {
          if (element.value['coupons'].length !== 0) {
            for (let i = 0; i < element.value['coupons'].length; i++) {
              this.couponsArray.push(element.value['coupons'][i]);
            }
          }
        });

        this.setObjValues(this.couponsArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setObjValues(cArray) {
    let tArray = cArray.map(e => {
      return e['usedOn'] ? e['usedOn'] : null;
    });
    tArray = tArray.map(e => e).filter(e => e !== null);
    console.log('tArray is ', tArray);
    for (let i = 0; i < tArray.length; i++) {
      const now = new Date(tArray[i]);

      console.log(
        'time is',
        now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds()
      );
      const hrs = now.getHours();
      if (hrs >= 10 && hrs < 12) {
        this.dataSource.data[0]['value'] += 1;
      } else if (hrs >= 12 && hrs < 14) {
        this.dataSource.data[1]['value'] += 1;
      } else if (hrs >= 14 && hrs < 16) {
        this.dataSource.data[2]['value'] += 1;
      } else if (hrs >= 16 && hrs < 18) {
        this.dataSource.data[3]['value'] += 1;
      } else if (hrs >= 18 && hrs < 20) {
        this.dataSource.data[4]['value'] += 1;
      } else if (hrs >= 20 && hrs < 22) {
        this.dataSource.data[5]['value'] += 1;
      } else if (hrs >= 22 && hrs < 24) {
        this.dataSource.data[6]['value'] += 1;
      } else if (hrs >= 1 && hrs <= 2) {
        this.dataSource.data[7]['value'] += 1;
      }
    }

    console.log('dataSource is:', this.dataSource.data);
  }
}
