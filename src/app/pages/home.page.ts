import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'home-page',
    template: `
        Домашняя страница <br/>

        <a [routerLink]="['user', userId]" [queryParams]="{gaUuid: '423423'}"> К пользователю</a>
    `,
    imports: [RouterLink]
})
export class HomePage {
    userId = 1
}