import { Component, signal } from '@angular/core';
import { BehaviorSubject, interval, map, Subject, timer } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  template: `Смотри в консоль`,
  imports: [],
})
export class App {
	constructor() {
		this.example1();
		// this.example2();
		// this.example3();
		// this.example4();
	}

	example1() {
		const counterObservable$ = interval(100);

		const counter = toSignal(counterObservable$, {
			initialValue: 0,
		});

		console.log('Счетчик ', counter())
		
		timer(1000).subscribe(()=> {
			console.log('Счетчик через секунду ', counter())
		})
	}

	example2() {
		const subject$ = new Subject();
		const signal = toSignal(subject$, { requireSync: false }); 

		console.log('Счетчик ', signal())
		
		subject$.next(1);
		
		console.log('Счетчик ', signal())
	}

	example3() {
		const subject$ = new BehaviorSubject(0);
		const signal = toSignal(subject$); 

		console.log('Счетчик ', signal())
		
		subject$.error('Ошибка!');
		// subject$.complete();

		console.log('Счетчик ', signal())
	}

	example4() {
		const count = signal(1);

		const count$ = toObservable(count);

		count$
			.pipe(
				map((count) => count * count)
			)
			.subscribe((result) => console.log('RESULT ', result));

		count.set(4);
	}
}
