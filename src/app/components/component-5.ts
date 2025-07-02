import { Component, inject, OnInit } from "@angular/core";
import { APP_CONFIG } from "../tokens/app-config";

@Component({
    selector: 'component-5',
    template: 'Компонент 5',
})
export class Component5 implements OnInit {
    config = inject(APP_CONFIG);

    ngOnInit(): void {
        console.log('Заголовок страницы ', this.config.title);
    }
}