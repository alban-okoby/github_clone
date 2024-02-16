import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { NewRepositoryComponent } from './new-repository/new-repository.component';


@NgModule({
  declarations: [
    RepositoryListComponent,
    NewRepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }
