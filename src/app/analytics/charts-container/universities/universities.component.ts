import { element, Key } from 'protractor';
import { map } from 'rxjs/operators';
import { AnalyticsService } from './../../../shared/services/analytics.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { forkJoin, Observable, BehaviorSubject } from 'rxjs';

export interface Elements {
  name: string;

  students: number;
}

@Component({
  selector: 'app-universities',
  templateUrl: './universities.component.html',
  styleUrls: ['./universities.component.scss']
})
export class UniversitiesComponent implements OnInit {
  merchantId;
  $campaignsWithCoupons;
  $couponUsers;
  instituteIds = [];
  couponsArray = [];
  displayedColumns: string[] = ['name', 'students'];
  ELEMENT_DATA: Elements[] = [];
  // dataSource = [];
  dataSource = new BehaviorSubject([]);
  // dataSource = this.ELEMENT_DATA;
  constructor(
    private analyticsService: AnalyticsService,
    private changeDetectorRefs: ChangeDetectorRef
  ) {}

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

        this.instituteFn(this.couponsArray);
      },
      err => {
        console.log(err);
      }
    );
  }
  instituteFn(obj) {
    const tempObj = {};
    const users = obj.map(x => x.userId);
    forkJoin(
      users.map(ele => this.analyticsService.getUserById(ele))
    ).subscribe(
      res => {
        // console.log('fornkjoin res is ', res);
        this.instituteIds = res
          .map(e => {
            return e['instituteName'] ? e['instituteName'] : null;
          })
          .filter(x => x !== null);
        // console.log('institute name are ', this.instituteIds);
        let count = 0;
        for (let i = 0; i < this.instituteIds.length; i++) {
          let temp = this.instituteIds[i];
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
          // console.log('key', key, 'tempObj[key]', tempObj[key]);
          this.dataSource.next([
            ...this.dataSource.getValue(),
            { name: key, students: tempObj[key] }
          ]);
        });
      },
      err => {
        console.log(err);
      }
    );
  }
}
