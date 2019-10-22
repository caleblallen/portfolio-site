import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomepageTitleBarComponent } from './homepage-title-bar.component';

describe('HomepageTitleBarComponent', () => {
  let component: HomepageTitleBarComponent;
  let fixture: ComponentFixture<HomepageTitleBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomepageTitleBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomepageTitleBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
