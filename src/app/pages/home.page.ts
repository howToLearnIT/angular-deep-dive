import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";

@Component({
    selector: 'home-page',
    template: `
        Домашняя страница <br/>
        <a routerLink="admin"> В админку</a>
    `,
    imports: [RouterLink]
})
export class HomePage {}