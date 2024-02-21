import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryListComponent } from './repository-list/repository-list.component';
import { NewRepositoryComponent } from './new-repository/new-repository.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    RepositoryListComponent,
    NewRepositoryComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class RepositoryModule { }
