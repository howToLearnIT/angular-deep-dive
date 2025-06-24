import { Component, model, OnInit } from "@angular/core";
import { timer } from "rxjs";

@Component({
    selector: 'component-7',
    template: `
        {{ value() }}
    `,
})
export class Component6 implements OnInit {
    value = model(0);

    ngOnInit() {
        timer(5000).subscribe(()=> this.increment())
    }

    increment() {
        // Update the model input with a new value, propagating the value to any bindings. 
        this.value.update(oldValue => oldValue + 10);
    }
}