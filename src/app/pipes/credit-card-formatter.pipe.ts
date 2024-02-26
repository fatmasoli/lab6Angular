import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardFormatter',
  standalone: true
})
export class CreditCardFormatterPipe implements PipeTransform {
  transform(creditCardNumber: string): string {
    // Check if the input is valid
    if (!creditCardNumber || typeof creditCardNumber !== 'string' || creditCardNumber.length !== 16) {
      return 'Invalid credit card number';
    }

    // Format the credit card number
    return creditCardNumber.replace(/(.{4})/g, '$1 - ').trim();
  }


}
