import { TestBed } from '@angular/core/testing';

import { Crecompte } from './confcompte';

describe('Crecompte', () => {
  let service: Crecompte;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crecompte);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
