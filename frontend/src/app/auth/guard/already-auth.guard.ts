import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from '@angular/router';
import { AuthService } from 'src/app/auth/services/auth.service';


@Injectable({ providedIn: 'root' })
export class AlreadyConnectedGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (
      localStorage.getItem('c_uRs') === 'ROLE_USER' || localStorage.getItem('c_uRs') === 'ROLE_ADMIN'
    ) {
      this.router.navigate(['/home']);
      setTimeout(() => {
        // window.location.reload();
        return false;
      }, 300)
    }
    return true;
  }
}
