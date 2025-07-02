import { Component, inject, OnInit } from "@angular/core";
import { RootService } from "../services/root.service";

@Component({
    selector: 'component-1',
    template: 'Компонент 1',
    providers: [RootService]
})
export class Component1 implements OnInit {
    rootService = inject(RootService);

    ngOnInit(): void {
        console.log('Получил значение из рут сервиса', this.rootService.value);
    }
}