import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepositoryRoutingModule } from './repository-routing.module';
import { RepositoryListComponent } from './repository-list/repository-list.component';


@NgModule({
  declarations: [
    RepositoryListComponent
  ],
  imports: [
    CommonModule,
    RepositoryRoutingModule
  ]
})
export class RepositoryModule { }
