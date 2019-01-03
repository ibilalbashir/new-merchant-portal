import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  imports: [
    CommonModule,
    AnalyticsRoutingModule
  ],
  declarations: [ChartsComponent]
})
export class AnalyticsModule { }
