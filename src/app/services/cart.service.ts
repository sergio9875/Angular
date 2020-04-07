import { Injectable, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart:Product[] = []
  OnCartChange:EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  addProduct( product: Product) {
    this.cart.push( product )
    this.OnCartChange.emit();
  }

  removeProduct( productId: string) {
    this.cart = this.cart.filter( item => item.id != productId )
    this.OnCartChange.emit();
  }

  getTotalItems():number{
    return this.cart.length;
  }

  getTotalPrice():number {

    let total = 0;

    this.cart.forEach( item => {
      total += Number(item.price)
    })

    return total;

  }
}
