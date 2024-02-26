import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { IProduct } from '../../models/iproduct';

@Component({
  selector: 'app-productsparent',
  standalone: true,
  imports: [FormsModule,ProductComponent],
  templateUrl: './productsparent.component.html',
  styleUrl: './productsparent.component.scss'
})
export class ProductsparentComponent {
  filterproducts:string=""
  cart:IProduct[]=[]
 // Method to add item to cart
 getCartItem(product: IProduct) {
  // Check if the product already exists in the cart
  const existingProduct = this.cart.find(item => item.id === product.id);
  if (existingProduct) {
    // If product exists, increment quantity
    existingProduct.quantity++;
  } else {
    // If product doesn't exist, add it to cart with quantity 1
    this.cart.push({ ...product, quantity: 1 });
  }
}

}
 