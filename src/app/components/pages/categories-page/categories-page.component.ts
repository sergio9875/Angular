import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from 'src/app/models/Category';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-categories-page',
  templateUrl: './categories-page.component.html',
  styleUrls: ['./categories-page.component.css']
})
export class CategoriesPageComponent implements OnInit {


  products: Product[] = [];

  category: Category = {
    id: undefined,
    name: ''
  }

  constructor(private categoriesService:CategoriesService, private route:ActivatedRoute) {

    console.log('constructor of categories page');

    //  Get route parameters
    route.paramMap.subscribe( params => {
      this.category.id = params.get('id')
      this.initCategory();
    })


    // //  Subscrive to categoriesService events
    // categoriesService.OnChangeCategory.subscribe( categoryId => {

    //   console.log('Categories page informed about categy change to ' + categoryId)

    //   this.category.id = categoryId;
    //   this.initCategory();
    // })
  }

  ngOnInit() {

    console.log('ngOnInit of categories page');

    this.initCategory();

  }

  initCategory() {

    //  Get category object
    this.categoriesService.getCategoryById( this.category.id ).subscribe( response => {
      if(response.success) {
        this.category = response.data
      }
    })

    //  Get category products
    this.categoriesService.getCategoryProducts(  this.category.id  ).subscribe( response => {
      if(response.success) {
        this.products = response.data
      }
    })
  }

}
