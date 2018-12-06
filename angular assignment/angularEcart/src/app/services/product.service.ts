import { Injectable } from '@angular/core';

import { Product } from '../entities/product.entity';

@Injectable()
export class ProductService {

    private products: Product[];

    constructor() {
        this.products = [
            { id: 'p01', name: 'moisturizer'},
            { id: 'p02', name: 'Primer'},
            { id: 'p03', name: 'foundation'},
            { id: 'p04', name: 'concealer'},
            { id: 'p05', name: 'compact'},
            { id: 'p06', name: 'eyeshadow'},
            { id: 'p07', name: 'eyeliner'},
            { id: 'p08', name: 'lipstick'}
        ];
    }

    findAll(): Product[] {
        return this.products;
    }

    find(id: string): Product {
        return this.products[this.getSelectedIndex(id)];
    }

    private getSelectedIndex(id: string) {
        for (var i = 0; i < this.products.length; i++) {
            if (this.products[i].id == id) {
                return i;
            }
        }
        return -1;
    }

}