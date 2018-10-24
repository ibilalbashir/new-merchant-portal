import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCampaignComponent } from './main-campaign.component';

describe('MainCampaignComponent', () => {
  let component: MainCampaignComponent;
  let fixture: ComponentFixture<MainCampaignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCampaignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCampaignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
