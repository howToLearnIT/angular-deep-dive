import { Component, ElementRef, HostListener, input, OnInit, output } from "@angular/core";
import { Parent } from "./parent";

@Component({
    selector: 'child',
    template: `
        Ребенок {{name()}}
    `,
})
export class Child extends Parent {
    constructor(protected override element: ElementRef) {
        super(element);
    }

    override ngOnInit(): void {
        super.ngOnInit();
    }
}