import { Component } from "@angular/core";
import { MyDirective } from "../directives/my-directive";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'template-3',
    template: `
        <p>Обычный элемент</p>

        <ng-template #myFragment myDirective>
            <p>Фрагмент шаблона {{count}}</p>
        </ng-template>
        
        <ng-container *ngTemplateOutlet="myFragment"></ng-container>

    `,
    styleUrl: './styles.css',
    imports: [MyDirective, NgTemplateOutlet],
})
export class Template3 {
    count: number = 0;
}