import { Component, inject, OnInit } from "@angular/core";
import { LocalService } from "../services/local.service";

@Component({
    selector: 'component-3',
    template: 'Компонент 3',
})
export class Component3 implements OnInit {
    localService = inject(LocalService);

    ngOnInit(): void {
        console.log('Получил значение из локального сервиса в компоненте 3', this.localService.value);
    }
}