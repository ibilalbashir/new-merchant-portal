import { CampaignCardComponent } from './campaign-card/campaign-card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@NgModule({
    imports: [CommonModule],
    declarations: [CampaignCardComponent],
    exports: [CampaignCardComponent]
})
export class SharedModule {}
