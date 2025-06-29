import { Directive, inject, OnInit, TemplateRef } from "@angular/core";

@Directive({
    selector: 'ng-template[myDirective]'
})
export class MyDirective implements OnInit {
    fragment = inject(TemplateRef);

    ngOnInit(): void {
        console.log('FRAGMENT ', this.fragment)
    }
}