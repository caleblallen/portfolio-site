import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageDoodleComponent } from './homepage-doodle.component';

describe('HomepageDoodleComponent', () => {
  let component: HomepageDoodleComponent;
  let fixture: ComponentFixture<HomepageDoodleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomepageDoodleComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageDoodleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
