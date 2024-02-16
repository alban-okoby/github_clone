import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { authGuard } from 'src/app/auth/guard/auth.guard';

const routes: Routes = [
  {
    path: '', component: RepositoryListComponent,
    canActivate: [authGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
