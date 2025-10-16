import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Auth, getIdToken } from '@angular/fire/auth';
import { from, switchMap } from 'rxjs';


export const vtokenInterceptor: HttpInterceptorFn = (req, next) => {
   const auth = inject(Auth) 
   const protectedUrls = ['/user', '/film']; // 🔒 API nécessitant le token

    // Vérifie si l'URL de la requête correspond à une API protégée
    if (!protectedUrls.some(url => req.url.includes(url))) {
      return next(req); // ne modifie rien pour les autres requêtes
    }

    const user = auth.currentUser;

    if (!user) {
      // utilisateur non connecté → pas de token
      return next(req);
    }

    // Ajoute le token à la requête
    return from(getIdToken(user)).pipe(
      switchMap(token => {
        const cloned = req.clone({
          setHeaders: { Authorization: `Bearer ${token}` },
        });
        return next(cloned);
      })
    );
};
