import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Crecompte } from '../services/confcompte';

export const authGuardGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Crecompte);
  const router = inject(Router);

  const isLoggedIn = await auth.isAuthenticated();

  if (isLoggedIn) {
    return true; // autoriser
  } else {
    router.navigate(['/login']); // redirige vers login
    return false;
  }
};
