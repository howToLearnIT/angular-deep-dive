import { Component, inject, OnInit } from "@angular/core";
import { LocalService } from "../services/local.service";
import { Component3 } from "./component-3";

@Component({
    selector: 'component-2',
    template: `Компонент 2 <component-3/>`,
    providers: [LocalService],
    imports: [Component3]
})
export class Component2 implements OnInit {
    localService = inject(LocalService);

    ngOnInit(): void {
        console.log('Получил значение из локального сервиса в компоненте 2', this.localService.value);
    }
}