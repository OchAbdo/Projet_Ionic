import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Crecompte } from '../services/confcompte';

export const roleGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Crecompte);
  const rout = inject(Router);

  const isLoggedIn = await auth.isAuthenticated();
  

  if (isLoggedIn) {
    const rr = await auth.isAdmin();
    if(rr)
      return true;
    else
      rout.navigateByUrl("/tabs");
      return false;
  }
  else {
    rout.navigateByUrl("/login");
    return false;
  }
}
