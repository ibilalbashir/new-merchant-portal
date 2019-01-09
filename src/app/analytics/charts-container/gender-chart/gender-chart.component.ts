import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gender-chart',
  templateUrl: './gender-chart.component.html',
  styleUrls: ['./gender-chart.component.scss']
})
export class GenderChartComponent implements OnInit {
  dataSource: Object;
  constructor() {
    this.dataSource = {
      chart: {
        caption: 'Male vs Female Users',
        subCaption: '',
        use3DLighting: '0',
        showPercentValues: '1',
        decimals: '1',
        useDataPlotColorForLabels: '1',
        theme: 'fusion'
      },
      data: [
        {
          label: 'Male',
          value: '1250400'
        },
        {
          label: 'Female',
          value: '1463300'
        }
      ]
    };
  }

  ngOnInit() {}
}
