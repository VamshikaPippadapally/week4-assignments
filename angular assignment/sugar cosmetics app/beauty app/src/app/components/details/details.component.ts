import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from '../../services/product.service';

@Component({
	templateUrl: 'index.component.html'
})

export class DetailsComponent implements OnInit {

	product : any;

	constructor(
		private activatedRoute: ActivatedRoute,
		private productService: ProductService
	) { }

	ngOnInit() {
		this.activatedRoute.params.subscribe(params => {
			var id = params['id'];
			if (id) {
					this.product = this.productService.getDetails(id);
					console.log(this.product);
			}
				
		});
	}



}