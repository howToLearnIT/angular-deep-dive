import { Component, model, OnInit } from "@angular/core";
import { interval, timer } from "rxjs";

@Component({
    selector: 'component-7',
    template: `
        {{ value() }}
    `,
})
export class Component7 implements OnInit {
    value = model(0);

    ngOnInit() {
        interval(2000).subscribe(()=> this.increment())
    }

    increment() {
        this.value.update(oldValue => oldValue + 10);
    }
}