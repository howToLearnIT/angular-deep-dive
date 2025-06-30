import { ChangeDetectionStrategy, Component, input } from "@angular/core";

@Component({
    selector: 'my-component',
    templateUrl: './component.html',
    styleUrl: './component.css',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MyComponent {
    value = input<number>();
}