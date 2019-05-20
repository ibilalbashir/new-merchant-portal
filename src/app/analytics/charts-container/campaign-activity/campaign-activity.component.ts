import { map } from 'rxjs/operators';
import { AnalyticsService } from './../../../shared/services/analytics.service';
import { Component, OnInit, NgZone } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import * as FusionCharts from 'fusioncharts';
import * as Moment from 'moment';
@Component({
  selector: 'app-campaign-activity',
  templateUrl: './campaign-activity.component.html',
  styleUrls: ['./campaign-activity.component.scss']
})
export class CampaignActivityComponent implements OnInit {
  obj;

  merchantId;
  // dataSource = {
  //   data: [],
  //   yAxis: {
  //     plot: [{ value: 'Number of Coupons' }]
  //   },
  //   caption: { text: 'Campaign Activity' }
  // chart: {
  //   caption: 'Camapign Activity',
  //   subCaption: '',
  //   xAxisName: 'Day',
  //   yAxisName: 'Coupons',
  //   lineThickness: '2',
  //   theme: 'fusion'
  // },

  // trendlines: [
  //   {
  //     line: [
  //       {
  //         startvalue: '1',
  //         color: '#1aaf5d',
  //         displayvalue: '',
  //         valueOnRight: '1',
  //         thickness: '2'
  //       }
  //     ]
  //   }
  // ]
  // };
  $campaignsWithCoupons;
  couponsArray = [];
  dates = [];
  tArray = [];
  dataSource: any;
  type: string;
  width: string;
  height: string;
  constructor(private analyticsService: AnalyticsService) {

    this.type = 'timeseries';
    this.width = '100%';
    this.height = '400';
    // This is the dataSource of the chart
    this.dataSource = {
      // Initially data is set as null
      data: null,

      caption: {
        text: 'Sales Analysis'
      },
      subcaption: {
        text: 'Grocery'
      },
      yAxis: [
        {
          plot: {
            value: 'Grocery Sales Value',
            type: "column"

          },
          title: 'Sale Value'
        }
      ]

    }


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
      const arr = [Moment(key).format('DD-MMM-YY'), tempObj[key]]
      this.tArray.push(arr);
      console.log('tArray', this.tArray)
    });
    console.log(this.tArray);
    const dataArray = this.tArray;
    const schema = [{ name: "Time", type: "date", format: "%d-%b-%y", column: "Time", index: 0 },
    { name: "Grocery Sales Value", type: "number", column: "Grocery Sales Value", index: 1 }]
    const fusionDataStore = new FusionCharts.DataStore();
    // After that we are creating a DataTable by passing our data and schema as arguments
    const fusionTable = fusionDataStore.createDataTable(dataArray, schema);
    // Afet that we simply mutated our timeseries datasource by attaching the above
    // DataTable into its data property.

    this.dataSource.data = fusionTable;
    console.log('fusion table', this.dataSource.data)
    //this.dataSource.data = this.tArray;
    console.log('datasoruce', this.dataSource)
    // console.log('tempObj is ', tempObj);
    console.log('dataSource is ', this.dataSource);


  }


}
