import { Component, OnInit } from '@angular/core';
import { EjsRenderData } from './interfaces/ejs-render-data';
import { BuildHtmlService } from './services/build-html.service';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'ejs-preview',
  templateUrl: './ejs-preview.component.html',
  styleUrls: ['./ejs-preview.component.css']
})
export class EjsPreviewComponent implements OnInit {

  html: string;
  data: EjsRenderData;

  constructor(
    private buildHtml: BuildHtmlService
  ) { }

  ngOnInit() {
  }

  setRenderData(data) {
    this.data = data;
    this.build();
  }

  build() {
    this.html = this.buildHtml.build(this.data.ejs, this.data.data, this.data.options);
  }

}
