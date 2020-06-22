import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EjsPreviewComponent } from './ejs-preview.component';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatRippleModule,
    MatIconModule
  ],
  declarations: [
    EjsPreviewComponent
  ],
  exports: [
    EjsPreviewComponent
  ]
})
export class EjsPreviewModule { }
