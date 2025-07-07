import { Component, inject, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";
import { ADMIN_API_KEY } from "../tokens/admin-api-key";
import { RouterOutlet } from "@angular/router";

@Component({
    selector: 'admin-page',
    template: `
        Админка <br/>

        <router-outlet 
            (activate)="onActivate($event)" 
            (deactivate)="onDeactivate($event)"
            (attach)="onAttach($event)" 
            (detach)="onDetach($event)" 
        />
    `,
    imports: [RouterOutlet],
})
export class AdminPage implements OnInit {
    adminService = inject(AdminService);
    adminApiToken = inject(ADMIN_API_KEY);

    ngOnInit(): void {
        console.log('Role', this.adminService.role);
        console.log('Token', this.adminApiToken);
    }

    onDeactivate(event: unknown) {
        console.log('Де Активирован ', event);
	}

    onActivate(event: unknown) {
        console.log('Активирован ', event);
    }

    onAttach(event: unknown) {
        console.log('Аттач ', event);
    }

    onDetach(event: unknown) {
        console.log('Де Аттач ', event);
    }
}