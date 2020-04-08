import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-tool-bar-component',
  templateUrl: './tool-bar-component.component.html',
  styleUrls: ['./tool-bar-component.component.scss']
})
export class ToolBarComponentComponent implements AfterViewInit {

  constructor(public _commanService: CommanService) { }

  ngAfterViewInit() {
  }

  getColor(color) {
    this.resetAll();
    this._commanService.globalColor = color;
    this._commanService.penStatus = true;
  }

  getPen(color) {
    this.resetAll();
    this._commanService.globalColor = color;
    this._commanService.penStatus = true;
  }

  getEraser(color) {
    this.resetAll();
    this._commanService.globalColor = color;
    this._commanService.eraserStatus = true;
  }

  resetAll() {
    this._commanService.penStatus = false;
    this._commanService.eraserStatus = false;
  }

}
