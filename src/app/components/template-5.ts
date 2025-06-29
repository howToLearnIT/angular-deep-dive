import { Component } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'template-5',
    template: `
        @if (a > b) {
            <ng-container *ngTemplateOutlet="repeat"></ng-container>
        } @else if (b > a) {
            <ng-container *ngTemplateOutlet="repeat"></ng-container>
        } @else {
            <ng-container *ngTemplateOutlet="repeat"></ng-container>
        } 

        <ng-template #repeat>
            Код, который часто повторяется
        </ng-template>
    `,
    styleUrl: './styles.css',
    imports: [NgTemplateOutlet]
})
export class Template5 {
    a = 3;
    b = 3;
}