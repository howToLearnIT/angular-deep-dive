import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'admin-page',
    template: `
        Админка <br/>
        <button (click)="onNavigateToAdminSettings()"> В настройки админки </button>
    `,
})
export class AdminPage {
    private router = inject(Router);
    private route = inject(ActivatedRoute);

    onNavigateToAdminSettings() {
    	this.router.navigate(['settings'], {
            relativeTo: this.route,
        });

        // this.router.navigate(['settings'], {
        //     relativeTo: this.route,
        //     replaceUrl: true,
        // });
	}
}