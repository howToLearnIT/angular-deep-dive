import { Component, effect, linkedSignal, Signal, signal, untracked, WritableSignal } from '@angular/core';
import { BehaviorSubject, interval, timer } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  template: `Смотри в консоль`,
  imports: [],
})
export class App {
	constructor() {
		// this.example1();
		this.example2();
	}

	example1() {
		const counterObservable$ = interval(100);

		const counter = toSignal(counterObservable$, {initialValue: 0});

		console.log('Счетчик ', counter())
		
		timer(1000).subscribe(()=> {
			console.log('Счетчик через секунду ', counter())
		})
	}

	example2() {
		const subject$ = new BehaviorSubject<number>(0);

		const counter = toSignal(subject$);

		console.log('Счетчик ', counter())
		
		subject$.next(1);
		
		console.log('Счетчик ', counter())
	}

}
