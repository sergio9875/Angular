import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product:Product;

  constructor(private cart:CartService) { }

  ngOnInit() {
  }

  addToCart(product:Product) {
    this.cart.addProduct( product )
  }
}
