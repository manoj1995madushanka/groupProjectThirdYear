import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyLoginComponent } from './nanny-login.component';

describe('NannyLoginComponent', () => {
  let component: NannyLoginComponent;
  let fixture: ComponentFixture<NannyLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
