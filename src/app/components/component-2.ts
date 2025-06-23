import { Component, ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'component-2',
    template: `
        <p class="blue">Локальный синий</p>
    `,
    encapsulation: ViewEncapsulation.Emulated,
})
export class Component2 { }