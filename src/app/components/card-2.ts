import { Component, computed, OnInit, viewChild, viewChildren } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-2',
    template: `
        <card-header></card-header>
        <card-header></card-header>
    `,
    imports: [CardHeader],
})
export class Card2 implements OnInit {
    headers = viewChildren(CardHeader);
    headerTexts = computed(() => this.headers().map((header)=> header.text));

    ngOnInit() {
        console.log('HEADERS ', this.headers())
        console.log('HEADER TEXTS ', this.headerTexts())
    }
}