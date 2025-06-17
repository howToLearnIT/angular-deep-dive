import { Component } from '@angular/core';
import { ReversePipe } from './pipes';

@Component({
  selector: 'app-root',
  template: `
    Реверсивный текст: {{ text | reverse: 5}}
  `,
  imports: [ReversePipe],
})
export class App {
  text = 'Мы почти у финиша!';
}
