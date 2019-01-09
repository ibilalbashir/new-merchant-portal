import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponChartComponent } from './coupon-chart.component';

describe('CouponChartComponent', () => {
  let component: CouponChartComponent;
  let fixture: ComponentFixture<CouponChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
