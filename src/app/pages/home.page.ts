import { Component, inject } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'home-page',
    template: `
        Домашняя страница <br/><br/>
        <button (click)="onNavigateToAdminSettings()"> В настройки админки </button> <br/><br/>
        <button (click)="onNavigateToUser()"> К пользователю </button> <br/><br/>
        <button (click)="onNavigateToBlog()"> В блог </button> <br/><br/>
    `,
})
export class HomePage {
    private router = inject(Router);

    onNavigateToAdminSettings() {
        this.router.navigateByUrl('/admin/settings');
    }

    onNavigateToUser() {
        this.router.navigateByUrl('/user/1');
    }

    onNavigateToBlog() {
        this.router.navigateByUrl('/blog?category=cinema');
    }
}