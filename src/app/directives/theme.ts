import { Directive, input } from "@angular/core";
import { LocalService } from "../services/local.service";

@Directive({
    selector: '[theme]',
    providers: [LocalService]
})
export class Theme {
    theme = input<'light' | 'dark'>('light');
}