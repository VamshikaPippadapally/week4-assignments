import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'priceValue'})
export class priceValue implements PipeTransform {
  transform(value: string): number {
	var price = value.substr(1); 
    return parseFloat(price);
  }
}