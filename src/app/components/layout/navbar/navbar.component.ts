import { Component, OnInit } from '@angular/core';
import { CategoriesService } from 'src/app/services/categories.service';
import { ApiResponse } from 'src/app/models/ApiResponse'
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  cartItems:number = 0;

  categories = [];

  constructor(
    private categoriesService:CategoriesService,
    private cart:CartService
  ) {


    cart.OnCartChange.subscribe( () => {
      this.updateTotalItems();
    })
  }

  ngOnInit() {

    this.updateTotalItems();

    this.categoriesService.getCategories().subscribe( response  => {
      if(response.success) {
        this.categories = response.data
      }
    })
  }

  updateTotalItems() {
    this.cartItems = this.cart.getTotalItems();
  }

  onCategoryChange(categoryId: string) {
    console.log('Category changed to ' + categoryId)
    this.categoriesService.changeCategory(categoryId);
  }

}
