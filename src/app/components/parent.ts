import { Component, ElementRef, HostListener, input, OnInit, output } from "@angular/core";

@Component({
    selector: 'parent',
    template: `
        Родитель {{name()}}
    `,
})
export class Parent implements OnInit {
    name = input('Иван');
    nameChange = output<string>();

    constructor(protected element: ElementRef) { }

    ngOnInit(): void {
        console.log('ELEMENT ', this.element);
    }

    @HostListener('click')
    protected onChangeName() {
        this.nameChange.emit('Валентин');
    }
}