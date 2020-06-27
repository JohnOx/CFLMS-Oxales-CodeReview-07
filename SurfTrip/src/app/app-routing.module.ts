import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { TravelPageComponent } from './travel-page/travel-page.component';
import { BlogComponent } from './blog/blog.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path:"home", component: HomePageComponent
  },

  {
    path:"travel", component: TravelPageComponent
  },

  {
    path:"blog", component: BlogComponent
  },

  {
    path:"welcome", component: WelcomeComponent
  },

  {
    path:"contact", component: ContactComponent
  },

  {
    path:"cart", component: CartComponent
  },
 
  {
    path: 'offers/:offerID', component: TravelPageComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
