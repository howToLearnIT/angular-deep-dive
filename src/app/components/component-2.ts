import { Component, computed, input } from "@angular/core";

@Component({
    selector: 'component-2',
    template: `
        {{ label() }}
    `,
})
export class Component2 {
    value = input.required<number>();

    label = computed(() => `Значение слайдера ${this.value()}`); 
}