import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectWriteupComponent } from './project-writeup.component';

describe('ProjectWriteupComponent', () => {
  let component: ProjectWriteupComponent;
  let fixture: ComponentFixture<ProjectWriteupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectWriteupComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectWriteupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
