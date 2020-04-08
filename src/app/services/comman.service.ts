import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommanService {

  globalColor: string = '#000';
  penStatus: boolean = false;
  eraserStatus: boolean = false;

  constructor() { }
}
