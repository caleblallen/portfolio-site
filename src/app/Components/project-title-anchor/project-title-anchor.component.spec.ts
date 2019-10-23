import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTitleAnchorComponent } from './project-title-anchor.component';

describe('ProjectTitleAnchorComponent', () => {
  let component: ProjectTitleAnchorComponent;
  let fixture: ComponentFixture<ProjectTitleAnchorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectTitleAnchorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectTitleAnchorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
