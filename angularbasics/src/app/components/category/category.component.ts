import { Component, inject } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-category',
  imports: [],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
  providers:[CartService]
})
export class CategoryComponent {

  cartService=inject(CartService)

  constructor(private categoryService:CategoryService){

  }

  addCategory()
  {
    this.categoryService.addCategory("Electronics")
  }

  addProductTocart()
  {
    this.cartService.addProductToCart();
  }

}
