import { Component, HostBinding, HostListener, signal } from "@angular/core";

@Component({
    selector: '[slider-2]',
    template: ``,
})
export class Slider2 {
    @HostBinding('attr.aria-valuenow')
    value: number = 0;

    disabled: boolean = false;

    @HostBinding('tabIndex')
    getTabIndex() {
        return this.disabled ? -1 : 0;
    }

    @HostListener('keydown', ['$event'])
    updateValue(event: KeyboardEvent) {
        console.log('нажали на кнопу ', event)
    }
}