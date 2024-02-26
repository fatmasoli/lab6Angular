import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number,disVal:number): number {

    let discPercent = disVal /100;
    let discountValue = value * discPercent;
    let finalPrice=value-discountValue;
    return finalPrice;
  }

}
