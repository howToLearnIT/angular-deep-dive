import { Component } from "@angular/core";

@Component({
    selector: 'variable-3',
    template: `
        @let topLevel = value;

        <div>
            @let insideDiv = value;
        </div>

        {{topLevel}} <!-- Валидно -->

        {{insideDiv}} <!-- Валидно -->
        
        @if (condition) {
            {{topLevel + insideDiv}} <!-- Валидно -->
        
            @let nested = value;

            @if (condition) {
                {{topLevel + insideDiv + nested}} <!-- Валидно -->
            }
        }

    `,
    styleUrl: './styles.css',
    imports: []
})
export class Variable3 {
    value = 3;
    condition = true;
}