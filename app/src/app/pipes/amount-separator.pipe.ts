import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'amountSeparator'
})
export class AmountSeparatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value === null || value === undefined) return '';
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

}
