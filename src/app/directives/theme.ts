import { Directive, input } from "@angular/core";

@Directive({
    selector: '[theme]'
})
export class Theme {
    theme = input<'light' | 'dark'>('light');
}