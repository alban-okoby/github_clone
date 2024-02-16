import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';
import { authGuard } from '../auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {
        path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'repositories', loadChildren: () => import('./repository/repository.module').then(m => m.RepositoryModule)
      },
      { path: '', redirectTo: '', pathMatch: 'full' },
      // { path: '**', redirectTo: '', pathMatch: 'full' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
