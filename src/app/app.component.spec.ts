import { TestBed, async } from '@angular/core/testing';
import { TranslateService } from '@ngx-translate/core';
import { AppComponent } from './app.component';
import { TranslateMock } from './mock/translate.mock';
import lenguage from 'src/assets/base';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        AppComponent,
        { provide: TranslateService, useClass: TranslateMock }
      ]
    }).compileComponents();
  }));

  it('Should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Set translate lenguage', () => {
    const component = TestBed.inject(AppComponent);
    const translate = TestBed.inject(TranslateService);

    component.setLenguage(lenguage);
    
    expect(translate.getDefaultLang()).toEqual(lenguage);
  });
});
