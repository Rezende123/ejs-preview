/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputEjsComponent } from './input-ejs.component';
import { TranslateModule } from '@ngx-translate/core';

describe('InputEjsComponent', () => {
  let component: InputEjsComponent;
  let fixture: ComponentFixture<InputEjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
      ],
      declarations: [ InputEjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputEjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('JSON validation', () => {
    const tabIndex = 1;
    const tab = component.tabsConfig[tabIndex];
    const brokenJson = '{data:1}';

    component.onChange(tab.field, tabIndex, brokenJson);

    expect(tab.error).toEqual('err_json_format');
  });

  it('Send input data', () => {
    const tabIndex = 1;
    const tab = component.tabsConfig[tabIndex];
    const json = '{"data":1}';

    component.sendData.subscribe((obj) => {
      const jsonParsed = JSON.parse(json);
      expect(obj.data).toEqual(jsonParsed.data);
    });
    component.onChange(tab.field, tabIndex, json);
  });
});
