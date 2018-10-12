import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewComponent } from './view/view.component';
import { CreateComponent } from './create/create.component';

const routes: Routes = [
  {
    path : '', component : ViewComponent
  },
  {
    path : 'create', component : CreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CampaignRoutingModule { }
