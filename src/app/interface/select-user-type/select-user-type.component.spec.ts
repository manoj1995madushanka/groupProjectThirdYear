import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectUserTypeComponent } from './select-user-type.component';

describe('SelectUserTypeComponent', () => {
  let component: SelectUserTypeComponent;
  let fixture: ComponentFixture<SelectUserTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectUserTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectUserTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
