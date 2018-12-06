import { Routes, RouterModule } from '@angular/router';

import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
	{ path: '', component: ProductComponent },
	{ path: 'products', component: ProductComponent },
	{ path: 'cart', component: CartComponent },
	{ path: 'details', component: DetailsComponent },
	{ path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);