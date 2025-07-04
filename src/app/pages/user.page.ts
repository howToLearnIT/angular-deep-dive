import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'user-page',
    template: 'Страница пользователя',
})
export class UserPage implements OnInit {
    route = inject(ActivatedRoute);

    ngOnInit(): void {
        console.log(this.route);
    }
}