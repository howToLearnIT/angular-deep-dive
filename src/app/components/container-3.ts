import { Component, computed, input } from "@angular/core";
import { AdminProfile } from "./admin-profile";
import { UserProfile } from "./user-profile";
import { NgComponentOutlet } from "@angular/common";

@Component({
    selector: 'container-3',
    template: `
        <h2>Ваш профиль</h2>
        <ng-container [ngComponentOutlet]="profileComponent()" />
    `,
    styleUrl: './styles.css',
    imports: [NgComponentOutlet]
})
export class Container3 {
    isAdmin = input(false);
    profileComponent = computed(() => this.isAdmin() ? AdminProfile : UserProfile);
}