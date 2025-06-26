import { Component, DOCUMENT, ElementRef, inject, OnInit, Renderer2 } from "@angular/core";

@Component({
    selector: 'card-1',
    template: `
        Карточка
    `,
    imports: [],
})
export class Card1 implements OnInit {
    elementRef = inject(ElementRef);
    document = inject(DOCUMENT);
    renderer = inject(Renderer2);

    ngOnInit() {
        console.log('ELEMENT REF ', this.elementRef);
        console.log('DOCUMENT ', this.document);
        console.log('RENDERER ', this.renderer);
    }
}