import { booleanAttribute, Component, input, numberAttribute, OnInit } from "@angular/core";

@Component({
    selector: 'component-5',
    template: `
        {{ disabled() }}
        {{ value() }}

    `,
})
export class Component5 implements OnInit {
    disabled = input(false, {transform: booleanAttribute}); 
    value = input(0, {transform: numberAttribute}); 

    ngOnInit() {
        console.log('Disabled', this.disabled());
        console.log('Числовое значение', this.value());
    }
}