import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHomepageComponent } from './post-homepage.component';

describe('PostHomepageComponent', () => {
  let component: PostHomepageComponent;
  let fixture: ComponentFixture<PostHomepageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostHomepageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostHomepageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
