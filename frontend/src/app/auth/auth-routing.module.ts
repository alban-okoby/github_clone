import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    children: [
      { path: 'signin', component: SignInComponent  },
      { path: 'signup', component: SignUpComponent  },
      { path: '**', redirectTo: 'signin', pathMatch: 'full'  },
    ]
  },
  { path: '', redirectTo: 'signin', pathMatch: 'full'  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
