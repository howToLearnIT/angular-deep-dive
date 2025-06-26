import { Component } from "@angular/core";

@Component({
  selector: 'card-header',
  template: `
    {{text}}
    <ng-content />
  `
})
export class CardHeader {
  text: string = 'Заголовок'
}