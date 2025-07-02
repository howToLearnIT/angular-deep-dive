import { Component, inject, OnInit } from "@angular/core";
import { APP_CONFIG } from "../tokens/app-config";
import { SCROLL_REF } from "../tokens/scroll-ref";

@Component({
    selector: 'component-6',
    template: `
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
        Компонент 6
    `,
})
export class Component6 implements OnInit {
    scrollRef = inject(SCROLL_REF);

    ngOnInit(): void {
        console.log('Scroll Ref в Component 6 ', this.scrollRef);
    }
}