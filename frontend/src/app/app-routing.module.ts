import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { PagesModule } from './pages/pages.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule),
  },
  {
    path: 'auth',
    component: AuthComponent,
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
