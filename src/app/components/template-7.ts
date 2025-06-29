import { Component } from "@angular/core";
import { MyOutlet } from "./my-outlet";

@Component({
    selector: 'template-7',
    template: `
        <h2>Компонент с фрагментом</h2>

        <ng-template #myFragment let-topping="topping">
            <p>Это фрагмент с параметром {{topping}}</p>
        </ng-template>

        <my-outlet [fragment]="myFragment" />
    `,
    styleUrl: './styles.css',
    imports: [MyOutlet]
})
export class Template7 {
    a = 2;
    b = 3;
}