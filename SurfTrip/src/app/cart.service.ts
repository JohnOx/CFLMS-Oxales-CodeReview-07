import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  total = 0;
  
  constructor() { }

  addToCart(offer) {
    this.items.push(offer);
    
  }
 
  getItems() {
    return this.items;
  }
 
  clearCart() {
    this.items = [];
    return this.items;
  }


  calculatePrice() {
    let calcPrice: number = 0;
    for(let item of this.items){
      calcPrice += item.price;
    }
    return calcPrice.toFixed(2);
  }

  calculateDiscount(){
    let calcPrice: number = 0;
    for(let item of this.items){
      calcPrice += item.price;
      
    }
  
    if (calcPrice >= 200 && calcPrice < 500) {
      return Math.round(calcPrice * 90) / 100
    } else if(calcPrice >= 500) {
      return Math.round(calcPrice * 80) / 100
    }
    return calcPrice; 
  }
}
