import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

     products: Product[];

    constructor() {
		// Initilize the Products List on load
		  this.products_data();
    }

	//Displays List of products
    findAll(): Product[] {
     if(JSON.parse(localStorage.getItem('cart')).length != 0){
		  let cart: any = JSON.parse(localStorage.getItem('cart'));
			  for(var i = 0; i < this.products.length; i++) {
				for (var j = 0; j < cart.length; j++) {
				  let cart_item = JSON.parse(cart[j]);
					if(this.products[i].id == cart_item.product.id ){
						 this.products.splice(i, 1);
						break;
					}
					
				}
			}
     }
       return this.products; 
    }
	
	//Function To refresh the Products List once we remove/add Items to the cart
	refresh_product_list(){
		this.products_data();
		if(JSON.parse(localStorage.getItem('cart')).length != 0){
		  let cart: any = JSON.parse(localStorage.getItem('cart'));
			  for(var i = 0; i < this.products.length; i++) {
				for (var j = 0; j < cart.length; j++) {
				  let cart_item = JSON.parse(cart[j]);
					if(this.products[i].id == cart_item.product.id ){
						 this.products.splice(i, 1);
						break;
					}
					
				}
			}
		}
	}

    find(id: number): Product {
        return this.products[this.getSelectedIndex(id)];
    }

     getSelectedIndex(id: number) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

	//Function To Get the Details of the Product as per the ID passed
     getDetails(id:number){
      return this.products[this.getSelectedIndex(id)];
    }
	
	//Function To initailze the Products List
	  products_data() {
        this.products = [
							{
								"id": 0,
								"name": "Wine and shine",
								"cost": "$387.99",
								"details": {
								  "shade": 8,
								  "volume": "4.5 ml",
								  "type": "smudge me not",
								  "benefits": "If you've ever lusted for a one-coat wonder product for your lips, your search ends here. "
								}
							  },
							  {
								"id": 1,
								"name": "Drop dead red",
								"cost": "$100.99",
								"details": {
								  "shade": 10,
								  "volume": "4.5 ml",
								  "type": "glossy",
								  "benefits": "Get a full-blooded burst of pigment with just a single swipe of it."
								}
							  },
							  {
								"id": 2,
								"name": "Braden raisin",
								"cost": "$150.99",
								"details": {
								  "shade": 1,
								  "volume": "4.5 ml",
								  "type": "liquid",
								  "benefits": "this is a matte lipstick that is guaranteed to last longer on the lips."
								}
							  },
							  {
								"id": 3,
								"name": "Rethnik Pink",
								"cost": "$200.95",
								"details": {
								  "shade": 7,
								  "volume": "2.5 ml",
								  "type": "matte",
								  "benefits": "gives you opaque pigmentation with a single swipe that stays all day with zero feathering or fading. "
								}
							  },
							  {
								"id": 4,
								"name": "Bare Flair",
								"cost": "$250.99",
								"details": {
								  "shade": 16,
								  "volume": "4 ml",
								  "type": "long lasting",
								  "benefits":"It is a great shade and will go with every skin tone. But, it will look more flattering on fair to medium skin tones. "
								}
							  },
							  {
								"id": 5,
								"name": "Plum yum",
								"cost": "$300.99",
								"details": {
								  "shade": 4,
								  "volume": "10 ml",
								  "type": "zero fading",
								  "benefits":"Plum yum is very wearable shade. In fact, girls with any skin tone can sport this shade."
								}
							  }
          ]
    }

}