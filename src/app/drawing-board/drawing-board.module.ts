import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DrawingBoardComponentComponent } from './drawing-board-component/drawing-board-component.component';



@NgModule({
  declarations: [DrawingBoardComponentComponent],
  imports: [
    CommonModule
  ],
  exports:[DrawingBoardComponentComponent]
})
export class DrawingBoardModule { }
