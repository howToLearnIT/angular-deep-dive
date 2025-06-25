import { Component } from "@angular/core";

@Component({
    selector: 'card-description, [card-description]',
    template: `
        <ng-content></ng-content>
    `,
    styles: `
        :host {
            color: #4c4949;
        }
    `
})
export class CardDescription {}