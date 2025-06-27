import { Component, input } from "@angular/core";

@Component({
    selector: 'template-example',
    templateUrl: './template-example.html'
})
export class TemplateExample {
    value = input(0)
}