import { Component } from "@angular/core";

@Component({
    selector: 'card-3',
    template: `
        <ng-content select="card-title, [card-title]">
            Дефолтный заголовок
        </ng-content>

        <ng-content select="card-description, [card-description]">
            Дефолтное описание
        </ng-content>
    `,
    styleUrl: './card.css',
})
export class Card3 {

}