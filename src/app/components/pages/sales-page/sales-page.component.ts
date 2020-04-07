import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-sales-page',
  templateUrl: './sales-page.component.html',
  styleUrls: ['./sales-page.component.css']
})
export class SalesPageComponent implements OnInit {

  products:Product[] = [];

  constructor(private productService:ProductsService) { }

  ngOnInit() {
    this.productService.getProductsOnSale().subscribe( response => {
      if(response.success) {
        this.products = response.data;
      }
     })
  }


  addToCart() {

  }

}
