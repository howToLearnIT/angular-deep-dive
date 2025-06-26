import { Component, computed, ElementRef, OnInit, viewChild } from "@angular/core";
import { CardHeader } from "./card-header";

@Component({
    selector: 'card-5',
    template: `
        <card-header #header></card-header>
        <p #text> Текст </p>
    `,
    imports: [CardHeader],
})
export class Card5 implements OnInit {
    header = viewChild<CardHeader>('header');
    headerText = computed(() => this.header()?.text);

    text = viewChild<ElementRef>('text');


    ngOnInit() {
        console.log('HEADER ', this.header())
        console.log('HEADER TEXT ', this.headerText())

        console.log('TEXT ', this.text())
    }
}