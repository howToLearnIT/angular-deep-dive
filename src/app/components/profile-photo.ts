import { Component, input } from "@angular/core";

@Component({
    selector: 'profile-photo',
    host: {
        'role': 'presentation()',
        '[id]': 'id()',
    },
    template: `Фото`,
})
export class ProfilePhoto {
    presentation = input<string>('Роль');
    id = input<number>(1);
}