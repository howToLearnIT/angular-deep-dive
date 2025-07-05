import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router, RouterLink } from "@angular/router";

@Component({
    selector: 'blog-page',
    template: `
        Блог <br/><br/>
        
        <button (click)="onSort()"> Сортировать </button> <br/><br/>

        <a [routerLink]="[]" [queryParams]="{sort: true}" queryParamsHandling="merge"> К Сортировать</a>
    `,
    imports: [RouterLink]
})
export class BlogPage implements OnInit {
    private route = inject(ActivatedRoute);
    private router = inject(Router);

    ngOnInit(): void {
        this.listenQueryParams();
    }

    onSort() {
        this.router.navigate([], {
            queryParams: { sort: true },
            queryParamsHandling: 'merge'
        });
    }

    private listenQueryParams() {
        this.route.queryParams.subscribe((params) => {
            console.log('Новые квери-параметры ', params);
        });
    }
}