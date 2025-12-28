import { Pipe, PipeTransform } from '@angular/core';
//   {"Nisha"|marks:23:89:50}

@Pipe({
  name: 'marks'
})
export class MarksPipe implements PipeTransform {

  transform(value: string, ...args: number[]): unknown {
    let total:number=0;
    for(let i of args)
    {
      total+=i;
    }
    return `${value} has got total ${total} marks`;
  }

}
