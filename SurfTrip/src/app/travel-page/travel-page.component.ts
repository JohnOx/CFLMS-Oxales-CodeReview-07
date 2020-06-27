import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

import { offers } from './../offersList';

@Component({
  selector: 'travelpage',
  templateUrl: './travel-page.component.html',
  styleUrls: ['./travel-page.component.css']
})
export class TravelPageComponent implements OnInit {

  offer=offers;
  koffer;
  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  addToCart(koffer) {
    alert('Your next adventure has been added to your quiver!');
    this.cartService.addToCart(koffer);
  }

  ngOnInit(): void {
   this.route.paramMap.subscribe(params => {
      this.koffer = this.offer[+params.get('offerID')]
    }) 
  }

}

