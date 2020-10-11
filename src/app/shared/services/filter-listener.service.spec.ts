import { TestBed } from '@angular/core/testing';

import { FilterListenerService } from './filter-listener.service';

describe('FilterListenerService', () => {
  let service: FilterListenerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilterListenerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
