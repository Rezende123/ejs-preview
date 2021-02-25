import { Injectable } from '@angular/core';
import ejs from 'ejs';

@Injectable({
  providedIn: 'root'
})
export class BuildHtmlService {

  build(template: string, data = {}, options = {}) {
    try {
      return ejs.render(template, data, options);
    } catch (e) {
      return new Error(e);
    }
  }

}
