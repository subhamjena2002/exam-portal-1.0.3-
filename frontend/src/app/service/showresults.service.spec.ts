import { TestBed } from '@angular/core/testing';

import { ShowresultsService } from './showresults.service';

describe('ShowresultsService', () => {
  let service: ShowresultsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowresultsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
