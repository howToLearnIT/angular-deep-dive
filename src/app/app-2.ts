import { Component, effect, signal, untracked, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
	count: WritableSignal<number> = signal(0);
 	currentUser: WritableSignal<string> = signal('Иван');

	constructor() {
		effect(() => {
			console.log(`Юзер ${this.currentUser()} и счетчик ${untracked(this.count)}`);
		});

		this.currentUser.set('Андрей')
	}
}
