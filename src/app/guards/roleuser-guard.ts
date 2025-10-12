import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Crecompte } from '../services/confcompte';

export const roleuserGuard: CanActivateFn = async (route, state) => {
  const auth = inject(Crecompte);
  const rout = inject(Router);

  const isLoggedIn = await auth.isAuthenticated();
  

  if (isLoggedIn) {
    const rr = await auth.isUser();
    
    if(rr)
      return true;
    else
      rout.navigateByUrl("/admin-listuser")
      return false;
  }
  else {
    rout.navigateByUrl("/login");
    return false;
  }
};
