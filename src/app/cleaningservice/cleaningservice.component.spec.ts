import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningserviceComponent } from './cleaningservice.component';

describe('CleaningserviceComponent', () => {
  let component: CleaningserviceComponent;
  let fixture: ComponentFixture<CleaningserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CleaningserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CleaningserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
