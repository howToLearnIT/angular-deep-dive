import { Component } from "@angular/core";

@Component({
    selector: 'template-example',
    template: `
        <input type="text" (keyup)="onKeyUp($event)" />
        <input type="text" (keyup.shift.enter)="onEnterShift($event)" />

        <a href="#overlay" (click)="onLinkClick($event)"> Ссылка </a>
    `,
    styles: `
        :host {
            display: flex;
            gap: 16px;
            flex-direction: column;
        }
    `
})
export class TemplateExample {
    onKeyUp(event: KeyboardEvent): void {
        console.log(`Пользователь нажал на: ${event.key}`);
    }

    onEnterShift(event: Event): void {
        console.log('Событие:', event);
        console.log('Клавиша:', (event as KeyboardEvent).key);
    }

    onLinkClick(event: MouseEvent): void {
        event.preventDefault();
    }
}