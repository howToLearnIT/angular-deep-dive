import { Component } from "@angular/core";

@Component({
    selector: 'template-1',
    template: `
        <p>Обычный элемент</p>

        <ng-template #myFragment>
            <p>Фрагмент шаблона {{count}}</p>
        </ng-template>
    `,
    styleUrl: './styles.css',
})
export class Template1 {
    count: number = 0;
}