import { Component, input, OnInit } from "@angular/core";

@Component({
    selector: 'component-6',
    template: `
        {{ value() }}
    `,
})
export class Component6 implements OnInit {
    value = input(0, {alias: 'sliderValue'});

    ngOnInit() {
        console.log('Значение слайдера', this.value());
    }
}