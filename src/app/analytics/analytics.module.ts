import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AnalyticsRoutingModule } from './analytics-routing.module';
import { ChartsContainerComponent } from './charts-container/charts-container.component';
import { BranchActivityComponent } from './charts-container/branch-activity/branch-activity.component';
import { CampaignActivityComponent } from './charts-container/campaign-activity/campaign-activity.component';
import { FusionChartsModule } from 'angular-fusioncharts';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';

// Load FusionCharts
import * as FusionCharts from 'fusioncharts';
// Load Charts module
import * as Charts from 'fusioncharts/fusioncharts.charts';
// Load fusion theme
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import {
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';
import { GenderChartComponent } from './charts-container/gender-chart/gender-chart.component';
import { CouponChartComponent } from './charts-container/coupon-chart/coupon-chart.component';
import { UniversitiesComponent } from './charts-container/universities/universities.component';
import { TimeVisualizationComponent } from './charts-container/time-visualization/time-visualization.component';

// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, FusionTheme);

@NgModule({
  imports: [
    CommonModule,
    AnalyticsRoutingModule,
    FusionChartsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatTableModule
  ],
  declarations: [
    ChartsContainerComponent,
    BranchActivityComponent,
    CampaignActivityComponent,
    GenderChartComponent,
    CouponChartComponent,
    UniversitiesComponent,
    TimeVisualizationComponent
  ]
})
export class AnalyticsModule {}
