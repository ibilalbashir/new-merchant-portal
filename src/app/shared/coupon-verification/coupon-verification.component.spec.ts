import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponVerificationComponent } from './coupon-verification.component';

describe('CouponVerificationComponent', () => {
  let component: CouponVerificationComponent;
  let fixture: ComponentFixture<CouponVerificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponVerificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponVerificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
