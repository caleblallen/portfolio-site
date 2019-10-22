import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconPillsComponent } from './icon-pills.component';

describe('IconPillsComponent', () => {
  let component: IconPillsComponent;
  let fixture: ComponentFixture<IconPillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconPillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconPillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
