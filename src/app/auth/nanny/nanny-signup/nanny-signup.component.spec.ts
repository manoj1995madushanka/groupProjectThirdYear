import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannySignupComponent } from './nanny-signup.component';

describe('NannySignupComponent', () => {
  let component: NannySignupComponent;
  let fixture: ComponentFixture<NannySignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannySignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannySignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
