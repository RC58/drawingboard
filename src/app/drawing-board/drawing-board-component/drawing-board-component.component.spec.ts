import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawingBoardComponentComponent } from './drawing-board-component.component';

describe('DrawingBoardComponentComponent', () => {
  let component: DrawingBoardComponentComponent;
  let fixture: ComponentFixture<DrawingBoardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawingBoardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawingBoardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
