import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwardsAndActivitiesComponent } from './awards-and-activities.component';

describe('AwardsAndActivitiesComponent', () => {
  let component: AwardsAndActivitiesComponent;
  let fixture: ComponentFixture<AwardsAndActivitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwardsAndActivitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwardsAndActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
