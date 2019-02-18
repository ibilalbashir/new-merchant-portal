import { map } from 'rxjs/operators';
import { AnalyticsService } from './../../../shared/services/analytics.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-campaign-activity',
  templateUrl: './campaign-activity.component.html',
  styleUrls: ['./campaign-activity.component.scss']
})
export class CampaignActivityComponent implements OnInit {
  obj;

  merchantId;
  dataSource = {
    chart: {
      caption: 'Camapign Activity',
      subCaption: '',
      xAxisName: 'Day',
      yAxisName: 'Coupons',
      lineThickness: '2',
      theme: 'fusion'
    },
    data: [],
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
        // console.log('mapped is', mapped);
        mapped.forEach(element => {
          if (element.value['coupons'].length !== 0) {
            for (let i = 0; i < element.value['coupons'].length; i++) {
              this.couponsArray.push(element.value['coupons'][i]);
            }
          }
        });
        this.setGraphData(this.couponsArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  setGraphData(cArray) {
    const tempObj = {};
    const dateArray = [];
    // console.log('cArray is', cArray);
    cArray = cArray
      .map(e => {
        return e['usedOn'] ? e['usedOn'] : null;
      })
      .filter(e => e !== null);
    // console.log('cArray after map', cArray);

    let count = 0;
    for (let i = 0; i < cArray.length; i++) {
      const now = new Date(cArray[i]);
      // console.log(
      //   now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate()
      // );
      const currentDate =
        now.getFullYear() + '-' + (now.getMonth() + 1) + '-' + now.getDate();
      dateArray.push(currentDate);
      let temp = dateArray[i];
      if (!tempObj[temp]) {
        tempObj[temp] = 1;
      } else {
        tempObj[temp] = tempObj[temp] + 1;
      }
      // console.log('obj is ', tempObj);

      temp = '';
      count = 0;
    }
    Object.keys(tempObj).forEach(key => {
      this.dataSource.data.push({ label: key, value: tempObj[key] });
    });
    // console.log('tempObj is ', tempObj);
    // console.log('dataSource is ', this.dataSource);
  }
}
