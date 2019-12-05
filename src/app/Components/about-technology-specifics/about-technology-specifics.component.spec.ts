import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutTechnologySpecificsComponent } from './about-technology-specifics.component';

describe('AboutTechnologySpecificsComponent', () => {
  let component: AboutTechnologySpecificsComponent;
  let fixture: ComponentFixture<AboutTechnologySpecificsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AboutTechnologySpecificsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutTechnologySpecificsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
