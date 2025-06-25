import { Component, signal } from "@angular/core";

@Component({
    selector: '[slider-1]',
    host: {
        'role': 'slider',
        '[attr.aria-valuenow]': 'value',
        '[class.active]': 'isActive()',
        '[tabIndex]': 'disabled ? -1 : 0',
        '(keydown)': 'updateValue($event)',
    },
    template: ``,
})
export class Slider1 {
    value: number = 0;
    disabled: boolean = false;
    isActive = signal(true);

    updateValue(event: KeyboardEvent) {
        console.log('Нажали на кнопку ', event);
    }
}