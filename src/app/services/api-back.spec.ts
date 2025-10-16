import { TestBed } from '@angular/core/testing';

import { ApiBack } from './api-back';

describe('ApiBack', () => {
  let service: ApiBack;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBack);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
