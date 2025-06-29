import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'template-1',
    template: `
        <p>Обычный элемент</p>

        <ng-template #myFragment>
            <p>Фрагмент шаблона {{count}}</p>
        </ng-template>

        <ng-container *ngTemplateOutlet="myFragment"></ng-container>
    `,
    styleUrl: './styles.css',
    imports: [NgTemplateOutlet],
})
export class Template1 {
    count: number = 0;
}