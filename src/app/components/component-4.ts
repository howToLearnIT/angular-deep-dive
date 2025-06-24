import { Component, input, OnInit } from "@angular/core";

@Component({
    selector: 'component-4',
    template: `
        {{ widthPx() }}
    `,
})
export class Component4 implements OnInit {
    widthPx = input('', {transform: this.appendPx});

    ngOnInit() {
        console.log('Ширина в пикселях', this.widthPx());
    }

    appendPx(value: number): string {
        return `${value}px`;
    }
}