import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
import { MatInputModule, MatFormFieldModule, MatStepperModule, MatOptionModule, MatSelectModule, MatDatepickerModule, MatCheckbox, MatCheckboxModule, MatRadioModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    CampaignRoutingModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatOptionModule,
    MatSelectModule,
    MatDatepickerModule,
    MatCheckboxModule,
    MatRadioModule
  ],
  declarations: [CreateComponent, ViewComponent]
})
export class CampaignModule { }
