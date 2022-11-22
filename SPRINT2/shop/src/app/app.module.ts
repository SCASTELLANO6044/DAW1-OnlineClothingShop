import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { ShopComponent } from './modules/shop/shop.component';
import { DetailComponent } from './modules/detail/detail.component';
import { ContactComponent } from './modules/contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { ShoppingCartComponent } from './modules/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './modules/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ShopComponent,
    DetailComponent,
    ContactComponent,
    ShoppingCartComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
