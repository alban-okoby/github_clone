import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Custom elements imports
import { HomeRoutingModule } from './home-routing.module';
import { GuestComponent } from './components/guest/guest.component';
import { UserComponent } from './components/user/user.component';
import { HomeComponent } from './home.component';
import { ProductivityComponent } from './components/_productivity/productivity.component';
import { CampaignComponent } from './components/_campaign/campaign.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { CampagnBottomComponent } from './components/campagn-bottom/campagn-bottom.component';


@NgModule({
  declarations: [
    GuestComponent,
    UserComponent,
    HomeComponent,
    ProductivityComponent,
    CampaignComponent,
    CampagnBottomComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,

    ComponentsModule
  ]
})
export class HomeModule { }
