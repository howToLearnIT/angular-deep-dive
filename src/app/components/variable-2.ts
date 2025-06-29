import { Component } from "@angular/core";

@Component({
    selector: 'variable-2',
    template: `
        @let value = 1;

        {{value}}

    `,
    styleUrl: './styles.css',
    imports: []
})
export class Variable2 {}

        // <button (click)="value = value + 1">Увеличить</button>
