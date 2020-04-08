import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { DrawingBoardModule } from '../drawing-board/drawing-board.module';
import { ToolBarModule } from '../tool-bar/tool-bar.module';



@NgModule({
  declarations: [BoardComponent],
  imports: [CommonModule, 
    DrawingBoardModule,
    ToolBarModule
  ],
  exports: [BoardComponent]
})
export class LayoutModule { }

