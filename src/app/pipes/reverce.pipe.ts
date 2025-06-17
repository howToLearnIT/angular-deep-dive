import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
    name: 'reverse'
})
export class ReversePipe implements PipeTransform {
  transform(value: string, skipSimbolsCount: number = 0): string {
    let reverse = '';

    // кот -> ток  2
    for (let i = value.length - 1 - skipSimbolsCount; i >= 0; i--) {
        reverse += value[i]; // ток
    }

    return reverse;
  }
}
