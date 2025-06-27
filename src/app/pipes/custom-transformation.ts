import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'customTransformation',
})
export class CustomTransformationPipe implements PipeTransform {
    transform(value: string, format?: string): string {
        let msg = `Моя кастомная трансформация ${value}.`

        if (format === 'uppercase') {
            return msg.toUpperCase()
        } else {
            return msg
        }
    }
}