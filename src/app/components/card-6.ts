import { Component, contentChild, ElementRef, OnInit } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-6',
    template: `
        <ng-content />
    `,
    imports: [],
})
export class Card6 implements OnInit {
    header = contentChild(CardHeader, {read: ElementRef});

    ngOnInit() {
        console.log('HEADER ', this.header())
    }
}