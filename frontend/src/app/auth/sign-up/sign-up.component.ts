import { Component } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import Swal from 'sweetalert2';
import { RolePriorities, UserRoles } from '../models/roles.model';
import { AuthService } from '../services/auth.service';
import { AuthModel, RegisterModel } from '../models/auth.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  registerForm!: FormGroup;
  hasError!: boolean;
  isRequesting: boolean = false;
  returnUrl!: string;
  isLoading$!: Observable<boolean>;
  registerModel: RegisterModel = new RegisterModel();
  roles: string[] = [];
  isLoggedIn!: boolean;

  private unsubscribe: Subscription[] = [];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    // private userService: UserService,
    private route: ActivatedRoute,
    private router: Router // private commonService: CommonService
  ) {
    // this.isLoading$ = this.authService.isLoading$;
    // redirect to home if already logged in
    // if (this.authService.currentUserValue) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit(): void {
    this.initForm();
    this.returnUrl =
      this.route.snapshot.queryParams['returnUrl'.toString()] || '/';
  }

  initForm() {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    this.registerForm = this.fb.group({
      email: [this.registerModel.email, [Validators.pattern(emailPattern)]],
      username: [this.registerModel.username, [Validators.required, Validators.maxLength(50), Validators.minLength(2)]],
      password: [
        this.registerModel.password,
        [Validators.required, Validators.minLength(6)],
      ],
      matchingPassword: [
        this.registerModel.matchingPassword,
        [Validators.required, Validators.minLength(6)],
      ],
      displayName: [this.registerModel.displayName, [Validators.required]],
    });
  }
  get f() {
    return this.registerForm.controls;
  }

  get email() {
    return this.registerForm.get('email') as FormControl;
  }
  get username() {
    return this.registerForm.get('username') as FormControl;
  }
  get password() {
    return this.registerForm.get('password') as FormControl;
  }
  get matchingPassword() {
    return this.registerForm.get('matchingPassword') as FormControl;
  }
  get displayName() {
    return this.registerForm.get('displayName') as FormControl;
  }

  submit() {
    // if (this.registerForm.valid) {
    this.isRequesting = true;
    this.authService.SignUp(this.registerModel).subscribe((res: any) => {
      // this.showSuccessMessage(res.user.displayName);
      if (this.registerForm.valid) {
        setTimeout(() => {
          this.router.navigateByUrl('/auth/signin');
        }, 900);
      } 
    });
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
      text: 'Bad credentials !',
    });
  }

  showSuccessMessage(username: string, email?: string) {
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
      title: `Your are registered successFully ${username}. Please check your email: ${email} to validate your registration `,
      timer: 11000,
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

  emailError() {
    return this.email.hasError('required')
      ? 'Email is required'
      : this.email.hasError('pattern')
      ? 'Email invalid'
      : '';
  }
  usernameError() {
    return this.username.hasError('required')
      ? 'Username is required'
      : this.username.hasError('maxLength')
      ? 'Username is to long > 50'
      : this.username.hasError('minLength')
      ? 'Username is to Short < 2'
      : '';
  }
  passwordError() {
    return this.password.hasError('required') ? 'Password is required' : '';
  }
  matchingPasswordError() {
    return this.matchingPassword.hasError('required')
      ? 'Repeat Password is required'
      : '';
  }
  displayNameError() {
    return this.displayName.hasError('required')
      ? 'Display Name is required'
      : '';
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb: any) => sb.unsubscribe());
  }
}
