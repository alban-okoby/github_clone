import { Router } from "@angular/router";
import { inject } from "@angular/core";
import { AuthService } from "../services/auth.service";


export const authGuard = () => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (localStorage.getItem('isLoggedIn') == 'true' && (localStorage.getItem('c_uRs') == 'ROLE_ADMIN' || localStorage.getItem('c_uRs') == 'ROLE_USER') && localStorage.getItem('isLoggedIn') == 'true') {
    return true;

  }
  // Redirect to the login page
  return router.parseUrl('/auth/signin');
};
