import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disccount',
})
export class DisccountPipe implements PipeTransform {
  transform(value:number): number {
    return value * 0.9;
  }
}
