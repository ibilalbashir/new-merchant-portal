import { AnalyticsService } from './../../../shared/services/analytics.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-coupon-chart',
  templateUrl: './coupon-chart.component.html',
  styleUrls: ['./coupon-chart.component.scss']
})
export class CouponChartComponent implements OnInit {
  $campaignsWithCoupons: Observable<Object>;
  dataSource: Object;
  merchantId;
  totalCoupons = 0;
  usedCoupons = 0;

  constructor(private analyticsService: AnalyticsService) {
    this.dataSource = {
      chart: {
        caption: 'Generated vs Availed coupons',
        subCaption: '',
        use3DLighting: '0',
        showPercentValues: '1',
        decimals: '1',
        useDataPlotColorForLabels: '1',
        theme: 'fusion'
      },
      data: [
        {
          label: 'Used',
          value: ''
        },
        {
          label: 'Generated',
          value: ''
        }
      ]
    };
  }

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

        mapped.forEach(element => {
          this.totalCoupons =
            this.totalCoupons + element.value['coupons'].length;

          this.dataSource['data'][1]['value'] = this.totalCoupons;
          element.value['coupons'].forEach(coupon => {
            if (coupon['isUsed'] === true) {
              this.usedCoupons = this.usedCoupons + 1;
              this.dataSource['data'][0]['value'] = this.usedCoupons;
            }
          });
        });
      },
      err => {
        console.log(err);
      }
    );

    // this.$campaignsWithCoupons.pipe(map(x => new Array(x))).subscribe(
    //   res => {
    //     console.log('res[0] is ', res[0]);
    //     res[0].forEach(element => {
    //       console.log(element);
    //       this.totalCoupons = this.totalCoupons + element['coupons'].length;

    //       this.dataSource['data'][1]['value'] = this.totalCoupons;

    //       element['coupons'].forEach(coupon => {
    //         if (coupon['isUsed'] === true) {
    //           this.usedCoupons = this.usedCoupons + 1;
    //         }
    //         console.log('total used coupons', this.usedCoupons);
    //         this.dataSource['data'][0]['value'] = this.usedCoupons;
    //       });
    //     });
    //   },
    //   err => {
    //     console.log(err);
    //   }
    // );
  }
}
