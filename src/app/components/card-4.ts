import { Component, computed, contentChildren, OnInit, viewChild, viewChildren } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-4',
    template: `
        <ng-content />
    `,
    imports: [CardHeader],
})
export class Card4 implements OnInit {
    headers = contentChildren(CardHeader);
    headerTexts = computed(() => this.headers().map((header)=> header.text));

    ngOnInit() {
        console.log('HEADERS ', this.headers())
        console.log('HEADER TEXTS ', this.headerTexts())
    }
}