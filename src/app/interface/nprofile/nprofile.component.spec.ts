import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NprofileComponent } from './nprofile.component';

describe('NprofileComponent', () => {
  let component: NprofileComponent;
  let fixture: ComponentFixture<NprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
