import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterialModule } from './../app.module';
import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatTooltipModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { CouponVerificationComponent } from '../shared/coupon-verification/coupon-verification.component';
import { CampaignDetailComponent } from './campaign-detail/campaign-detail.component';
@NgModule({
  imports: [
    CommonModule,
    MatTooltipModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    CampaignCardComponent,
    CouponVerificationComponent,
    CampaignDetailComponent
  ],
  exports: [CampaignCardComponent],
  entryComponents: [CouponVerificationComponent, CampaignDetailComponent]
})
export class SharedModule {}
