import { Component, inject, input, TemplateRef, ViewContainerRef } from "@angular/core";

@Component({
  selector: 'my-outlet',
  template: `<button (click)="showFragment()">Show</button>`,
})
export class MyOutlet {
    fragment = input<TemplateRef<unknown> | undefined>();

    private viewContainer = inject(ViewContainerRef);

    showFragment() {
        if (this.fragment()) {
            this.viewContainer.createEmbeddedView(this.fragment()!, {topping: 'onion'});
        }
    }
}