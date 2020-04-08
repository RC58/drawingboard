import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolBarComponentComponent } from './tool-bar-component/tool-bar-component.component';



@NgModule({
  declarations: [ToolBarComponentComponent],
  imports: [
    CommonModule
  ],
  exports: [ToolBarComponentComponent]
})
export class ToolBarModule { }
