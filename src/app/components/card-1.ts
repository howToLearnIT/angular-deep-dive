import { Component, computed, OnInit, viewChild } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-1',
    template: '<card-header></card-header>',
    imports: [CardHeader],
})
export class Card1 implements OnInit {
    header = viewChild(CardHeader);
    headerText = computed(() => this.header()?.text);

    ngOnInit() {
        console.log('HEADER ', this.header())
        console.log('HEADER TEXT ', this.headerText())
    }
}