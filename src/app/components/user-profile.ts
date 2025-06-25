import { Component, ElementRef, input, SimpleChanges, ViewChild } from "@angular/core";

@Component({
    selector: 'user-profile',
    template: `
        <p #descriptionElement> {{ name() }} </p>
    `
})
export class UserProfile {
    name = input('');

    @ViewChild('descriptionElement') descriptionElement: ElementRef | null = null;

    constructor() {
        console.log('Конструктор');
    }

    ngOnInit() {
        console.log('Инициализация ngOnInit');
    }

    ngDoCheck(changes: SimpleChanges) {
        console.log('Проверили изменения ngDoCheck ', changes)
    }

    ngOnChanges(changes: SimpleChanges) {
        console.log('Изменились инпут-параметры ngOnChanges ', changes);
    }

    ngAfterContentInit() {
        console.log('Контент инициализирован ngAfterContentInit ', this.descriptionElement)
    }

    ngAfterContentChecked() {
        console.log('Контент проверен ngAfterContentChecked')
    }

    ngAfterViewInit() {
        console.log('Вью инициализирован ngAfterViewInit ', this.descriptionElement)
    }

    ngAfterViewChecked() {
        console.log('Вью проверен ngAfterViewChecked')
    }

    ngOnDestroy() {
        console.log('Уничтожен компонент');
    }
}