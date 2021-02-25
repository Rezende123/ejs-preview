import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  @Output()
  sendLenguage = new EventEmitter();

  @Input()
  lenguage: string;

  changeLenguage(lenguage) {
    this.lenguage = lenguage.value;
    this.sendLenguage.emit(this.lenguage);
  }
}
