import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './components/pages/home-page/home-page.component';
import { SalesPageComponent } from './components/pages/sales-page/sales-page.component';
import { CategoriesPageComponent } from './components/pages/categories-page/categories-page.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';


const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'sales',
    component: SalesPageComponent
  },
  {
    path: 'categories',
    component: CategoriesPageComponent
  },
  {
    path: 'categories/:id',
    component: CategoriesPageComponent
  },
  {
    path: 'cart',
    component: CartPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
