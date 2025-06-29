import { Component } from "@angular/core";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'template-6',
    template: `
        @if (a > b) {
            <ng-container *ngTemplateOutlet="content"></ng-container>
        } @else if (b > a) {
            <ng-container *ngTemplateOutlet="content"></ng-container>
        } @else {
            <ng-container *ngTemplateOutlet="content"></ng-container>
        } 

        <ng-template #content>
            <ng-content />
        </ng-template>
    `,
    styleUrl: './styles.css',
    imports: [NgTemplateOutlet]
})
export class Template6 {
    a = 2;
    b = 3;
}