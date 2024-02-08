import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (localStorage.getItem('fuckYou') == 'true' && (localStorage.getItem('qsdfghjklmpoiuytreza') == 'ROLE_ADMIN' || localStorage.getItem('qsdfghjklmpoiuytreza') == 'ROLE_NORMAL') ||
  localStorage.getItem('qsdfghjklmpoiuytreza') == 'HEAD') {
    return true;

  }
  // Redirect to the login page
  return router.parseUrl('/auth/signin');
};
