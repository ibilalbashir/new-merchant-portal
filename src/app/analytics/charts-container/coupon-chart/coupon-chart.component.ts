import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-chart',
  templateUrl: './coupon-chart.component.html',
  styleUrls: ['./coupon-chart.component.scss']
})
export class CouponChartComponent implements OnInit {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Generated vs used coupons',
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
          value: '1250400'
        },
        {
          label: 'Generated',
          value: '1463300'
        }
      ]
    };
  }

  ngOnInit() {}
}
