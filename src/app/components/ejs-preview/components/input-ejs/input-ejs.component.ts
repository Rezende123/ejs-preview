import { Component, OnInit } from '@angular/core';
import { EjsRenderData } from '../../interfaces/ejs-render-data';

@Component({
  selector: 'app-input-ejs',
  templateUrl: './input-ejs.component.html',
  styleUrls: ['./input-ejs.component.css']
})
export class InputEjsComponent {

  data: EjsRenderData;

  tabsConfig = [
    {
      label: 'Ejs',
      field: 'ejs',
      error: null
    },
    {
      label: 'Dados',
      field: 'data',
      error: null
    },
    {
      label: 'Opções',
      field: 'options',
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
    console.log(this.data);
  }

  modeByField(field: string) {
    switch (field) {
      case 'ejs':
        return 'html';

      case 'data':
      case 'options':
        return 'json';
    }
  }

}
