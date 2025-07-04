import { Component, inject, OnInit } from "@angular/core";
import { AdminService } from "../services/admin.service";
import { ADMIN_API_KEY } from "../tokens/admin-api-key";

@Component({
    selector: 'admin-teams-page',
    template: 'Команды',
})
export class AdminTeamsPage implements OnInit {
    adminService = inject(AdminService);
    adminApiToken = inject(ADMIN_API_KEY);

    ngOnInit(): void {
        console.log('Role', this.adminService.role);
        console.log('Token', this.adminApiToken);
    }
}