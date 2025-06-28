import { Component, OnInit, TemplateRef, viewChild } from "@angular/core";
import { MyDirective } from "../directives/my-directive";

@Component({
    selector: 'template-3',
    template: `
        <p>Обычный элемент</p>

        <ng-template myDirective>
            <p>Фрагмент шаблона {{count}}</p>
        </ng-template>
    `,
    styleUrl: './styles.css',
    imports: [MyDirective]
})
export class Template3 {
    count: number = 0;
}