import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { roleuserGuard } from './roleuser-guard';

describe('roleuserGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => roleuserGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
