import { Component, OnInit, Input } from '@angular/core';
import { CommanService } from 'src/app/services/comman.service';

@Component({
  selector: 'app-drawing-board-component',
  templateUrl: './drawing-board-component.component.html',
  styleUrls: ['./drawing-board-component.component.scss']
})
export class DrawingBoardComponentComponent implements OnInit {

  @Input('strokColor') public globalColor;

  constructor(public _commanService: CommanService) { }

  ngOnInit() {
    let svgBoard: SVGSVGElement = <any>document.getElementById('svgBoard');

    //get co-ordinates of lines
    const svgPoint = (elem, x, y) => {
      let p = svgBoard.createSVGPoint();
      p.x = x;
      p.y = y;
      return p.matrixTransform(elem.getScreenCTM().inverse());
    }

    //check mouse over the pallet
    svgBoard.addEventListener('mouseover', (event) => {
      if (this._commanService.penStatus) {
        svgBoard.style.cursor = 'crosshair';
      } else {
        svgBoard.style.cursor = 'default';
      }
    });

    //call event when mouse down on pallet
    svgBoard.addEventListener('mousedown', (event) => {
      const polyline = document.createElementNS('http://www.w3.org/2000/svg', 'polyline');
      const start = svgPoint(svgBoard, event.clientX, event.clientY);
      let points = [];

      //function to draw lines
      const drawLine = (e) => {
        let color = this._commanService.globalColor;
        let p = svgPoint(svgBoard, e.clientX, e.clientY);
        points.push(p.x.toString());
        points.push(p.y.toString());
        polyline.setAttributeNS(null, 'points', points.toString());
        polyline.setAttributeNS(null, "stroke", color);
        polyline.setAttributeNS(null, 'stroke-width', '2');
        polyline.setAttributeNS(null, 'fill', 'none');
        svgBoard.appendChild(polyline);
      }

      //function call when mouse up
      const endDraw = (e) => {
        svgBoard.removeEventListener('mousemove', drawLine);
        svgBoard.removeEventListener('mouseup', endDraw);
      }

      //check pen is seleted or not
      if (this._commanService.penStatus) {
        svgBoard.addEventListener('mousemove', drawLine);
        svgBoard.addEventListener('mouseup', endDraw);
      }
    });
  }

  ngDoCheck() {
    //check user click on eraser
    if (this._commanService.eraserStatus) {
      let svgBoard: SVGSVGElement = <any>document.getElementById('svgBoard');
      svgBoard.querySelectorAll('polyline').forEach(e => e.parentNode.removeChild(e));
    }
  }

}
