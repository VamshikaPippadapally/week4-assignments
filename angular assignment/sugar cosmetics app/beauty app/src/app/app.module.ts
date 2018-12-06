import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductComponent } from './components/product/product.component';
import { DetailsComponent } from './components/details/details.component';

import { ProductService } from './services/product.service';

import { routing } from './app.routing';

import { GrdFilterPipe } from './grd-filter.pipe';
import { priceValue } from './price_value.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CartComponent,
    ProductComponent,
    DetailsComponent,
	GrdFilterPipe,
	priceValue
  ],
  imports: [
    BrowserModule,
    routing,
	FormsModule,
  ],
  providers: [
    ProductService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }

