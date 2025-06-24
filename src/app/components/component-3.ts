import { Component, input, OnInit } from "@angular/core";

function trimString(value: string | undefined): string {
  return value?.trim() ?? '';
}

@Component({
    selector: 'component-3',
    template: `
        {{ label() }}
    `,
})
export class Component3 implements OnInit {
    label = input('', {transform: trimString});

    ngOnInit() {
        console.log('Лейбл', this.label());
    }
}