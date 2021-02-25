import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjsPreviewComponent } from './ejs-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AceEditorModule } from 'ng2-ace-editor';
import { InputEjsComponent } from './components/input-ejs/input-ejs.component';
import { OutputEjsComponent } from './components/output-ejs/output-ejs.component';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import lenguage from 'src/assets/base';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
    AceEditorModule,
    TranslateModule.forRoot({
      defaultLanguage: lenguage,
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
    })
  ],
  declarations: [
    EjsPreviewComponent,
    InputEjsComponent,
    OutputEjsComponent
  ],
  exports: [
    EjsPreviewComponent
  ]
})
export class EjsPreviewModule { }
