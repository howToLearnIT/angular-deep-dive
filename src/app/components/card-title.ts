import { Component } from "@angular/core";

@Component({
    selector: 'card-title, [card-title]',
    template: `
        <ng-content></ng-content>
    `,
})
export class CardTitle {}