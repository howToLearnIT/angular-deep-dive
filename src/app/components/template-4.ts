import { Component, OnInit, TemplateRef, viewChild } from "@angular/core";
import { MyDirective } from "../directives/my-directive";

@Component({
    selector: 'template-4',
    template: `
        
        <ng-container *ngTemplateOutlet="myFragment"></ng-container>
    `,
    styleUrl: './styles.css',
    imports: [MyDirective]
})
export class Template4 {
    count: number = 0;
}