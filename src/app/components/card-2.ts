import { Component } from "@angular/core";

@Component({
    selector: 'card-2',
    template: `
        <ng-content select="[yt-title]"></ng-content>
        <ng-content select="[yt-description]"></ng-content>
    `,
    styleUrl: './card.css',
})
export class Card2 {

}