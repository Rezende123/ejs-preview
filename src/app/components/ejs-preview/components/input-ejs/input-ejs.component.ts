import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { EjsRenderData } from '../../interfaces/ejs-render-data';

@Component({
  selector: 'app-input-ejs',
  templateUrl: './input-ejs.component.html',
  styleUrls: ['./input-ejs.component.css']
})
export class InputEjsComponent {

  @Output()
  sendData = new EventEmitter<EjsRenderData>();

  data: EjsRenderData;
  tabsConfig = [
    {
      field: 'template',
      mode: 'html'
    },
    {
      field: 'data',
      mode: 'json',
      error: null
    },
    {
      field: 'options',
      mode: 'json',
      error: null
    }
  ];

  constructor() { }

  onChange(field: string, index: number, content: string): void {
    if (!this.data) {
      this.data = {} as EjsRenderData;
    }

    if (field === 'options' || field === 'data') {
      try {
        content = JSON.parse(content);
      } catch (e) {
        this.tabsConfig[index].error = 'Erro no formato do JSON';
        return;
      }
    }

    this.tabsConfig[index].error = null;
    this.data[field] = content;

    this.updateData();
  }

  updateData() {
    const dataIsValid = this.data && this.data.template && !this.tabsConfig.find(t => t.error);
    if (dataIsValid) {
      this.sendData.emit(this.data);
    }
  }

}
