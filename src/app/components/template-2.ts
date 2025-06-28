import { Component, OnInit, TemplateRef, viewChild } from "@angular/core";

@Component({
    selector: 'template-2',
    template: `
        <p>Обычный элемент</p>

        <ng-template #myFragment>
            <p>Фрагмент шаблона {{count}}</p>
        </ng-template>
    `,
    styleUrl: './styles.css',
})
export class Template2 implements OnInit {
    template = viewChild(TemplateRef);
    // template = viewChild('myFragment');

    count: number = 0;

    ngOnInit(): void {
        console.log('Template ', this.template());
    }
}