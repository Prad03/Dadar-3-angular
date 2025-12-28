import { Pipe, PipeTransform } from '@angular/core';

//   {{ 5 | square }}

@Pipe({
  name: 'square'
})
export class SquarePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*value;
  }

}
