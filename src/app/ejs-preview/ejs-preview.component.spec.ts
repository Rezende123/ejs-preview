/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EjsPreviewComponent } from './ejs-preview.component';
import { BuildHtmlService } from './services/build-html.service';

describe('EjsPreviewComponent', () => {
  let component: EjsPreviewComponent;
  let fixture: ComponentFixture<EjsPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjsPreviewComponent ],
      providers: [
        { provide: BuildHtmlService }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjsPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Render data', () => {
    const valueExpeted = '<a>ok</a>';
    const input = {
      template: '<a><%=value%></a>',
      data: {value:'ok'}
    }

    component.setRenderData(input);

    expect(component.html).toEqual(valueExpeted);
  });
});
