import { SharedModule } from 'app/shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { MainCampaignComponent } from './main-campaign/main-campaign.component';

@NgModule({
  imports: [CommonModule, MainPageRoutingModule, SharedModule],
  declarations: [MainCampaignComponent]
})
export class MainPageModule {}
