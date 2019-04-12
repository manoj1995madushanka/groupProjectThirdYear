import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NannyTableComponent } from './nanny-table.component';

describe('NannyTableComponent', () => {
  let component: NannyTableComponent;
  let fixture: ComponentFixture<NannyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NannyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NannyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
