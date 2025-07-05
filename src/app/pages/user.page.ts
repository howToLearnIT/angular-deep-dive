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

        this.readSnapshot();
        this.listenParams();
    }

    private readSnapshot() {
        const snapshot = this.route.snapshot;

        console.log({
            url: snapshot.url,
            params: snapshot.params,
            queryParams: snapshot.queryParams,
        });

        console.log('ID ', snapshot.paramMap.get('id'));
    }

    private listenParams() {
        this.route.params.subscribe((params) => {
            console.log('Новый ID ', params)
        });
    }
}