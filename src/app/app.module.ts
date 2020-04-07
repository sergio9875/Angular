import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/layout/navbar/navbar.component';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SalesPageComponent } from './components/pages/sales-page/sales-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { ProductComponent } from './components/product/product.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomePageComponent,
    SalesPageComponent,
    CategoriesPageComponent,
    ProductComponent,
    CartPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
