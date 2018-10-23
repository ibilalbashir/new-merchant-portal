import { CampaignCardComponent } from './../shared/campaign-card/campaign-card.component';
import { MaterialModule } from './../app.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CampaignRoutingModule } from './campaign-routing.module';
import { CreateComponent } from './create/create.component';
import { ViewComponent } from './view/view.component';
// tslint:disable-next-line:max-line-length
import {
  MatInputModule,
  MatFormFieldModule,
  MatStepperModule,
  MatOptionModule,
  MatSelectModule,
  MatDatepickerModule,
  MatCheckbox,
  MatCheckboxModule,
  MatRadioModule
} from '@angular/material';
import { MdModule } from 'app/md/md.module';
import { SharedModule } from 'app/shared/shared.module';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ArchiveComponent } from './archive/archive.component';
import { CurrentComponent } from './current/current.component';
import { PendingComponent } from './pending/pending.component';
import { CreateCategoryComponent } from './create-category/create-category.component';
// import { SharedModule } from 'app/shared/shared.module';

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
    MatRadioModule,
    MaterialModule,
    SharedModule,
    ImageCropperModule
  ],
  declarations: [
    CreateComponent,
    ViewComponent,
    ArchiveComponent,
    CurrentComponent,
    PendingComponent,
    CreateCategoryComponent
  ],
  entryComponents: [CreateCategoryComponent]
})
export class CampaignModule {}
