import { Component, inject, OnInit } from "@angular/core";
import { Theme } from "../directives/theme";
import { LocalService } from "../services/local.service";

@Component({
    selector: 'admin-profile',
    template: `
        Админка
    `,
})
export class AdminProfile implements OnInit{
    theme = inject(Theme)
    localService = inject(LocalService)


    ngOnInit(): void {
        console.log('Тема в админке ', this.theme.theme())
        console.log('Получил значение из локального сервиса в Admin-profile', this.localService.value);
    }
}