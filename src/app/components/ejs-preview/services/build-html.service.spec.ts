/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { BuildHtmlService } from './build-html.service';

describe('Service: BuildEjs', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BuildHtmlService]
    });
  });

  it('should ...', inject([BuildHtmlService], (service: BuildHtmlService) => {
    expect(service).toBeTruthy();
  }));
});
