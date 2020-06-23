import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjsPreviewComponent } from './ejs-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatTabsModule } from '@angular/material/tabs';
import { AceEditorModule } from 'ng2-ace-editor';
import { InputEjsComponent } from './components/input-ejs/input-ejs.component';
import { OutputEjsComponent } from './components/output-ejs/output-ejs.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatTabsModule,
    AceEditorModule
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
