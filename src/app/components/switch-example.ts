import { Component } from "@angular/core";

@Component({
    selector: 'switch-example',
    template: `
        @switch (userPermissions) {
            @case ('admin') {
                Админка
            }

            @case ('reviewer') {
                Ревьюверка
            }

            @case ('editor') {
                Редакторка
            }
        
            @default {
                Дефолтница
            }
        }
    `,
    styleUrl: './styles.css'

})
export class SwitchExample {
    userPermissions: 'admin' | 'reviewer' | 'editor' = 'editor';
}