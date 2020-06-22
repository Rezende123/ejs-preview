import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { ContentComponent } from './components/template/content/content.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EjsPreviewModule } from './components/ejs-preview/ejs-preview.module';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    EjsPreviewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
