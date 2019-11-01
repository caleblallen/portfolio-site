import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextPillComponent } from './text-pill.component';

describe('TextPillComponent', () => {
  let component: TextPillComponent;
  let fixture: ComponentFixture<TextPillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextPillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextPillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
