import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BranchActivityComponent } from './branch-activity.component';

describe('BranchActivityComponent', () => {
  let component: BranchActivityComponent;
  let fixture: ComponentFixture<BranchActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BranchActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BranchActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
