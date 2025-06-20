import { Component } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

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
		// this.example4();
	}

	example1() {		
		const subject$ = new Subject<number>();
		
		subject$.subscribe({
			next: (v) => console.log(`observerA: ${v}`),
		});

		subject$.subscribe({
			next: (v) => console.log(`observerB: ${v}`),
		});
		
		subject$.next(1);
		subject$.next(2);
	}

	example2() { 
		const subject$ = new Subject<number>();
		
		subject$.subscribe({
			next: (v) => console.log(`observerA: ${v}`),
		});

		subject$.subscribe({
			next: (v) => console.log(`observerB: ${v}`),
		});
		
		const observable = from([1, 2, 3]);
		
		observable.subscribe(subject$);
  	}

	example3() {
		const subject$ = new BehaviorSubject(0); // 0 is the initial value
 
		subject$.subscribe({
			next: (v) => console.log(`observerA: ${v}`),
		});
		
		subject$.next(1);
		subject$.next(2);
		
		subject$.subscribe({
			next: (v) => console.log(`observerB: ${v}`),
		});
		
		subject$.next(3);
  	}

	example4() {
		const subject$ = new ReplaySubject(3);

		subject$.subscribe({
			next: (v) => console.log(`observerA: ${v}`),
		});
		
		subject$.next(1);
		subject$.next(2);
		subject$.next(3);
		subject$.next(4);
		
		subject$.subscribe({
			next: (v) => console.log(`observerB: ${v}`),
		});
		
		subject$.next(5);
  	}
}
