import { Component, inject, OnInit } from "@angular/core";
import { RootService } from "../../../services/root.service";
import { LocalService } from "../../../services/local.service";

@Component({
    selector: 'admin',
    template: 'Админка',
    standalone: false,
})
export class Admin implements OnInit {
    rootService = inject(RootService);
    localService = inject(LocalService);

    ngOnInit(): void {
        console.log('Админка получила значение из рут сервиса', this.rootService.value);
        console.log('Админка получила значение из локального сервиса', this.localService.value);
    }
}