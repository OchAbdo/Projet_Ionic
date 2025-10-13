import { TestBed } from '@angular/core/testing';

import { FirebaseS } from './firebase-s';

describe('FirebaseS', () => {
  let service: FirebaseS;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseS);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
