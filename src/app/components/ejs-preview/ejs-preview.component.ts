import { Component, OnInit } from '@angular/core';
import { EjsRenderData } from './interfaces/ejs-render-data';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ejs-preview',
  templateUrl: './ejs-preview.component.html',
  styleUrls: ['./ejs-preview.component.css']
})
export class EjsPreviewComponent implements OnInit {

  data: EjsRenderData;

  constructor() { }

  ngOnInit() {
  }

  setRenderData(data) {
    this.data = data;
    console.log(data);
  }

}
