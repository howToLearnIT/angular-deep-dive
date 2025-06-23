import { Component, ViewEncapsulation } from "@angular/core";
import { Component2 } from "./component-2";

@Component({
    selector: 'component-1',
    template: `
        <p class="blue">Локальный синий</p>
        <p class="global-red">Глобальный красный</p>
        <component-2 class="component-1"></component-2>
    `,
    styles: `
        .blue {
            color: blue;
        }

        .component-1 {
            display: block;
            margin-top: 64px;
        }
    `,
    encapsulation: ViewEncapsulation.Emulated,
    imports: [Component2]
})
export class Component1 {}

// ::ng-deep {
//     .blue {
//         color: blue;
//     }
// }