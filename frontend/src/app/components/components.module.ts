import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { NavbarLinksComponent } from './layout/navbar/navbar-links/navbar-links.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    NavbarLinksComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    NavbarLinksComponent
  ]
})
export class ComponentsModule { }
