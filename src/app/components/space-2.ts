import { Component } from "@angular/core";

@Component({
    selector: 'space-2',
    preserveWhitespaces: true,
    template: `
        <p>Привет         мир</p>
        Какой-то текст
    `,
    styles: `
        :host {
            white-space: pre;
        }
    `
})
export class Space2 {}