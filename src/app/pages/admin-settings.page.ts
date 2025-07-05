import { Component, inject } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Location } from "@angular/common";

@Component({
    selector: 'admin-settings-page',
    template: `
        Настройки админки <br/>
        <button (click)="onBack()"> Назад </button>
    `,
})
export class AdminSettingsPage {
    private router = inject(Router);
    private route = inject(ActivatedRoute);
    private location = inject(Location);

    onBack() {
    	this.router.navigate(['..'], {
            relativeTo: this.route,
        });

        // this.location.back();
	}
}