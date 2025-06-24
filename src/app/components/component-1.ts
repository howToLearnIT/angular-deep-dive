import { Component, computed, input } from "@angular/core";

@Component({
    selector: 'component-1',
    template: `
        {{ label() }}
    `,
})
export class Component1 {
    value = input<number>(0);

    label = computed(() => `Значение слайдера ${this.value()}`); 
}