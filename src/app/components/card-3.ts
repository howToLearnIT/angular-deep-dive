import { Component, computed, contentChild, OnInit } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-3',
    template: `
        <ng-content />
    `,
    imports: [],
})
export class Card3 implements OnInit {
    header = contentChild(CardHeader);
    headerText = computed(() => this.header()?.text);

    ngOnInit() {
        console.log('HEADER ', this.header())
        console.log('HEADER TEXT ', this.headerText())
    }
}