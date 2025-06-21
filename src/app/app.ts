import { Component, effect, signal, untracked, WritableSignal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
	age: WritableSignal<number> = signal(18);
 	user: WritableSignal<string> = signal('Иван');

	constructor() {
		effect(() => {
			console.log(`Юзер ${this.user()} и возраст ${untracked(this.age)}`);
		});

		timer(1000).subscribe(() => {
			this.user.set('Андрей')
		});

		timer(2000).subscribe(() => {
			this.age.set(19)
		});

		// effect(() => {
		// 	const user = this.user();
			
		// 	untracked(() => {
		// 		const age = this.age()
		// 		console.log('Этот код не зависит от возраста ', this.age());
		// 	});
		// });
	}

	cleanup() {
		effect((onCleanup) => {
			const user = this.user();

			const timer = setTimeout(() => {
				console.log(`10 секунд прошло ${user}`);
			}, 10000);

			onCleanup(() => {
				clearTimeout(timer);
			});
		});
	}
}
