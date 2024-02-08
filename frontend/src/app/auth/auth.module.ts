import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    SignInComponent,
    SignUpComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
