import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PagesModule } from './pages/pages.module';
import { AlreadyConnectedGuard } from './auth/guard/already-auth.guard';
import { authGuard } from './auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [AlreadyConnectedGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: 'error', loadChildren: () => import('./pages/error/error.module').then((m) => m.ErrorModule),
  // },
  { path: '', redirectTo: '', pathMatch: 'full' },
  // { path: '**', redirectTo: 'error', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
