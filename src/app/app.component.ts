import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import lenguage from 'src/assets/base';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejs-preview';
  lenguage: string;

  constructor(private translate: TranslateService) {
    this.setLenguage(lenguage);
  }

  setLenguage(lenguage: string) {
    this.translate.setDefaultLang(lenguage);
    this.lenguage = lenguage;
  }
}
