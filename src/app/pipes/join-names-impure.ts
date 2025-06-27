import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'joinNamesImpure',
    pure: false,
})
export class JoinNamesImpurePipe implements PipeTransform {
    transform(names: string[]): string {
        return names.join();
    }
}