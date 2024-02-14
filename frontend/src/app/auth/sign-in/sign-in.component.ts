import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import Swal from 'sweetalert2';
import { AuthService } from '../services/auth.service';
import { RolePriorities, UserRoles } from '../models/roles.model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  loginForm!: FormGroup;
  hasError!: boolean;
  isRequesting: boolean = false;
  returnUrl!: string;
  isLoading$!: Observable<boolean>;
  loginModel!: any;
  roles: string[] = [];
  isLoggedIn!: boolean;

  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) // private commonService: CommonService
  {
    // this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.loginModel = { email: '', password: '' };
    this.initForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  get f() {
    return this.loginForm.controls;
  }

  get email() {
    return this.loginForm.get('email') as FormControl;
  }

  initForm() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.loginForm = this.fb.group({
      email: [this.loginModel.email, [Validators.pattern(emailPattern)]],
      password: [this.loginModel.password, [Validators.required]],
    });
  }

  submit() {
    if (this.loginForm.valid) {
      this.isRequesting = true;
      this.authService.login(this.loginModel).subscribe((res: any) => {
        const roles = res.user.roles;
        const sortedRoles = roles.sort((a: string, b: string) => {
          const priorityA = RolePriorities[a as UserRoles];
          const priorityB = RolePriorities[b as UserRoles];
          return priorityA - priorityB;
        });

        const priorityRole = sortedRoles[0];
        if (priorityRole) {
          localStorage.setItem('token', res.accessToken);
          localStorage.setItem('c_uRs', priorityRole);
          this.isLoggedIn = true;
          localStorage.setItem('isLoggedIn', 'true')
          this.router.navigateByUrl('/');

          this.showSuccessMessage(res.user.displayName);

          setTimeout(() => {
            // window.location.reload();
          }, 1500);
        } else {
          setTimeout(() => {
            this.badCredentials();
            this.isRequesting = false;
            this.showErorMessage();
            setTimeout(() => {}, 300);
            // this.badCredentials();
          }, 1100);
        }
      });
    }
  }

  /**
   * badCredentials : When credentials are incorrects
   * @return Nothing
   */
  badCredentials() {
    Swal.fire({
      icon: 'error',
      title: 'Oops... !',
      timer: 3000,
      text: 'Identifiants incorrects !',
    });
  }

  showSuccessMessage(username: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: `Welcome back 🖐🏽 ${username}`,
      timer: 15000,
    });
  }

  showErorMessage(username?: string) {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: false,
      didOpen: (toast: any) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'error',
      title: `BAD CREDENTIALS ❌`,
      timer: 5000,
    });
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb: any) => sb.unsubscribe());
  }
}
