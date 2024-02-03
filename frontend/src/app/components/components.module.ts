import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { NavbarLinksComponent } from './layout/navbar/navbar-links/navbar-links.component';
import { NavbarComponent } from './layout/navbar/navbar.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarLinksComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    NavbarComponent,
    NavbarLinksComponent
  ]
})
export class ComponentsModule { }
