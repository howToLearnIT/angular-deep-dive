import { Component, inject, OnInit } from "@angular/core";
import { LocalService } from "../services/local.service";

@Component({
    selector: 'component-2',
    template: 'Компонент 2',
    providers: [LocalService],
})
export class Component2 implements OnInit {
    localService = inject(LocalService);

    ngOnInit(): void {
        console.log('Получил значение из локального сервиса', this.localService.value);
    }
}