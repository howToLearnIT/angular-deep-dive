import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'container-4',
    template: `
        <ng-template #template>
            Шаблонище
        </ng-template>

        <ng-container [ngTemplateOutlet]="template" />
    `,
    styleUrl: './styles.css',
    imports: [NgTemplateOutlet],
})
export class Container4 {}