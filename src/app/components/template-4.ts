import { Component, contentChild } from "@angular/core";
import { MyDirective } from "../directives/my-directive";
import { NgTemplateOutlet } from "@angular/common";

@Component({
    selector: 'template-4',
    template: `
        @for (item of items; track item) {
            <ng-container 
                [ngTemplateOutlet]="template()?.fragment"
                [ngTemplateOutletContext]="{id: item}"
            >
            </ng-container> 
            
            <br/><br/>
        }
    `,
    styleUrl: './styles.css',
    imports: [NgTemplateOutlet]
})
export class Template4 {
    template = contentChild(MyDirective);

    items = [1, 2, 3, 4, 5, 6];
}