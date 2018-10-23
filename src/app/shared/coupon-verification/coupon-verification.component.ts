import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coupon-verification',
  templateUrl: './coupon-verification.component.html',
  styleUrls: ['./coupon-verification.component.scss']
})
export class CouponVerificationComponent implements OnInit {
  verifyForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {
    this.verifyForm = formBuilder.group({
      couponCode: ['', Validators.required]
    });
  }

  ngOnInit() {}
  verifyCouponCode() {}
}
