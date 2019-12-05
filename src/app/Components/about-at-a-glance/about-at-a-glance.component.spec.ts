import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutAtAGlanceComponent } from './about-at-a-glance.component';

describe('AboutAtAGlanceComponent', () => {
  let component: AboutAtAGlanceComponent;
  let fixture: ComponentFixture<AboutAtAGlanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutAtAGlanceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutAtAGlanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
