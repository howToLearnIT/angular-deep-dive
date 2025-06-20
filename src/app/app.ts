import { Component, computed, Signal, signal, WritableSignal } from '@angular/core';
import { BehaviorSubject, from, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
	constructor() {
		this.example1();
		// this.example2();
		// this.example3();
	}

	example1() {		
		const count: WritableSignal<number> = signal(0);

		console.log('После инициализации ', count())

		count.set(3);

		console.log('После сета ', count())

		count.update(value => value + 1);

		console.log('После апдейта ', count())

	}

	example2() {		
		const count: WritableSignal<number> = signal(0);
		const doubleCount: Signal<number> = computed(() => count() * 2);

		console.log('Вычисляемый сигнал ', doubleCount());
		// doubleCount.set(3);
		count.set(3);

		console.log('Вычисляемый сигнал после обновления count', doubleCount());

	}

	example3() {		
		const showCount = signal(false);
		const count = signal(0);
		const conditionalCount = computed(() => {
			console.log('Вычисляем conditionalCount')

			if (showCount()) {
				return `The count is ${count()}.`;
			} else {
				return 'Nothing to see here!';
			}
		});
	}
}
