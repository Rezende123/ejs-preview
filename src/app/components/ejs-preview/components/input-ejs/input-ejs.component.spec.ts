/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { InputEjsComponent } from './input-ejs.component';

describe('InputEjsComponent', () => {
  let component: InputEjsComponent;
  let fixture: ComponentFixture<InputEjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
});
