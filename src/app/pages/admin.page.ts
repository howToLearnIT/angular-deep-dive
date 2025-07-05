import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'admin-page',
    template: `
        Админка <br/>
        <a routerLink="settings"> Настройки админки</a> <br/>
        <a [routerLink]="['settings']"> Настройки админки</a>
    `,
    imports: [RouterLink]
})
export class AdminPage {}