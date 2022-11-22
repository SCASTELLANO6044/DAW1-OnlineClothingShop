import { Component } from '@angular/core';
import { CartProductDto } from 'src/app/dto/cart-product.dto';
import cart from 'src/json/cart.json';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
  shoppingCart: CartProductDto[];
  subtotalPrice = 0;
  shipping = 10;

  constructor() {
    this.shoppingCart = cart;
    this.shoppingCart.forEach(product => {
      this.subtotalPrice += (product.price * product.quantity);
    })
  }
}
