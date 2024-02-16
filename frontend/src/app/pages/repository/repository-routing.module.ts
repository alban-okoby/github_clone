import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { authGuard } from 'src/app/auth/guard/auth.guard';
import { NewRepositoryComponent } from './new-repository/new-repository.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [authGuard],
    children: [
      {
        path: '', component: RepositoryListComponent,
      },
      {
        path: 'new', component: NewRepositoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepositoryRoutingModule { }
