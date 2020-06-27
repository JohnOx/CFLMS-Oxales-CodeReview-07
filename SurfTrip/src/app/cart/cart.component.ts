import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';



@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total;
  discount;

  confirmation() {
      alert('Booking Confirmed');
  }

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.total = this.cartService.calculatePrice();
    this.discount = this.cartService.calculateDiscount();
  }

}
