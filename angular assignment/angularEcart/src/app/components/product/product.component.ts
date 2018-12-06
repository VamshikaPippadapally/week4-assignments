import { Component, OnInit } from '@angular/core';
import { Product } from '../../entities/product.entity';
import { Item } from '../../entities/item.entity';
import { ProductService } from '../../services/product.service';

@Component({
    selector: 'products',
	templateUrl: 'index.component.html'
})

export class ProductComponent implements OnInit {
	private products: Product[];
	private items: Item[] = [];
	private itemCount: number = 0;	
	constructor(
		private productService: ProductService
	) { }
	ngOnInit() {
		this.products = this.productService.findAll();
		this.loadCart();
	}
	addItem(id:any) {
	var item: Item = {
		product: this.productService.find(id),
		quantity: 1
	};

	if (id) {
		var item: Item = {
			product: this.productService.find(id),
			quantity: 1
		};
		if (localStorage.getItem('cart') == null) {
			let cart: any = [];
			cart.push(JSON.stringify(item));
			localStorage.setItem('cart', JSON.stringify(cart));
		} else {
			let cart: any = JSON.parse(localStorage.getItem('cart'));
			let index: number = -1;
			for (var i = 0; i < cart.length; i++) {
				let item: Item = JSON.parse(cart[i]);
				if (item.product.id == id) {
					index = i;
					break;
				}
			}
			if (index == -1) {
				cart.push(JSON.stringify(item));
				localStorage.setItem('cart', JSON.stringify(cart));
			} else {
				let item: Item = JSON.parse(cart[index]);
				item.quantity += 1;
				cart[index] = JSON.stringify(item);
				localStorage.setItem("cart", JSON.stringify(cart));
			}
		}
	}				
		this.loadCart();
	}	
	loadCart(): void {
		this.itemCount = 0;
		this.items = [];
		let cart = JSON.parse(localStorage.getItem('cart'));
		for (var i = 0; i < cart.length; i++) {
			let item = JSON.parse(cart[i]);
			this.itemCount += item.quantity;
		}
	}
  }
