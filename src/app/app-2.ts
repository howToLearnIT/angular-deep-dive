import { Component, effect, inject, linkedSignal, Signal, signal, untracked, WritableSignal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
}
