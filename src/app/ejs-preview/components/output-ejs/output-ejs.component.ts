import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-output-ejs',
  templateUrl: './output-ejs.component.html',
  styleUrls: ['./output-ejs.component.css']
})
export class OutputEjsComponent {

  @Input()
  html = '';

}
