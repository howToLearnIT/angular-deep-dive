import { Component, inject, OnInit } from "@angular/core";
import { Theme } from "../directives/theme";

@Component({
    selector: 'admin-profile',
    template: `
        Админка
    `,
    styleUrl: './styles.css',
})
export class AdminProfile implements OnInit{
    theme = inject(Theme)

    ngOnInit(): void {
        console.log('Тема в админке ', this.theme.theme())
    }
}