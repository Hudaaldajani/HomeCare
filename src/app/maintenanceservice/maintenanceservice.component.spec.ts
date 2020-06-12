import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaintenanceserviceComponent } from './maintenanceservice.component';

describe('MaintenanceserviceComponent', () => {
  let component: MaintenanceserviceComponent;
  let fixture: ComponentFixture<MaintenanceserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaintenanceserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaintenanceserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
