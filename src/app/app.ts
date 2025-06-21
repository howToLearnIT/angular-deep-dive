import { Component, effect, inject, Injector, signal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
  	readonly count = signal(0);

	constructor() {
		effect(() => {
			console.log(`Счетчик: ${this.count()}`);
		});

		timer(1000).subscribe(()=> {
			this.count.set(1);
			// this.initializeLogging();
		})
	}

	// private loggingEffect = effect(() => {
	// 	console.log(`Счетчик: ${this.count()}`);
	// });
	// private injector = inject(Injector);

	// initializeLogging(): void {
	// 	effect(() => {
	// 		console.log(`Счетчик из метода: ${this.count()}`);
	// 	}, {injector: this.injector});
  	// }
}
