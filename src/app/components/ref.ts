import { Component } from "@angular/core";

@Component({
    selector: 'my-ref',
    template: `
        <input #taskInput placeholder="Таска">

        <ng-template #myFragment>
            <p>Фрагмент</p>
        </ng-template>
    `,
    styleUrl: './styles.css',
    imports: []
})
export class Ref {}