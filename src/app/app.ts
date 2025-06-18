import { Component } from '@angular/core';
import { debounce, debounceTime, distinctUntilChanged, filter, from, fromEvent, interval, of, skip, skipUntil, skipWhile, take, takeUntil, throttle, throttleTime, timer } from 'rxjs';

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
		// this.example5();
		// this.example6();
		// this.example7();
		// this.example8();
		// this.example9();
		// this.example10();
		// this.example11();
	}

	example1() {
		of(1, 2, 3, 4, 5)
			.pipe(
				take(2)
			)
			.subscribe((result) => console.log(result));
	}

	example2() {
		const source$ = interval(1000);
		const clicks$ = fromEvent(document, 'click');

		source$.pipe(takeUntil(clicks$))
			.subscribe((result)=> console.log(result));
  	}

	example3() {
		const source$ = interval(500);
		const result$ = source$.pipe(skip(10));

		result$.subscribe((result) => console.log(result));
  	}

	example4() {
		const intervalObservable$ = interval(1000);
		const click$ = fromEvent(document, 'click');

		const emitAfterClick$ = intervalObservable$.pipe(
  			skipUntil(click$)
		);

		emitAfterClick$.subscribe(value => console.log(value));
  	}

	example5() {
		const source$ = from(['Green Arrow', 'SuperMan', 'Flash', 'SuperGirl', 'Black Canary'])
		const example$ = source$.pipe(skipWhile(hero => hero !== 'SuperGirl'));
		example$.subscribe(femaleHero => console.log(femaleHero));
  	}

	example6() {
		const numbers$ = of(1, 2, 3, 4, 5);

		numbers$
			.pipe(
				filter(num => num % 2 === 0)
			)
			.subscribe(console.log);
	}

	example7() {
		of(1, 1, 1, 2, 2, 2, 1, 1, 3, 3)
  			.pipe(distinctUntilChanged())
  			.subscribe(value => console.log(value));
  	}

	example8() {
		const clicks$ = fromEvent(document, 'click');
		const result$ = clicks$.pipe(debounceTime(1000));
		result$.subscribe(value => console.log(value));
  	}

	example9() {
		const clicks$ = fromEvent(document, 'click');
		const result$ = clicks$.pipe(debounceTime(1000));
		result$.subscribe(value => console.log(value));
  	}	
	
	example10() {
		const clicks$ = fromEvent(document, 'click');
		const result$ = clicks$.pipe(
			debounce(() => timer(1000))
		);
		result$.subscribe(value => console.log(value));
  	}

	example11() {
		const clicks$ = fromEvent(document, 'click');
		const result$ = clicks$.pipe(throttleTime(1000));
		result$.subscribe(value => console.log(value));
  	}

	example12() {
		const clicks$ = fromEvent(document, 'click');
		const result$ = clicks$.pipe(throttle(() => interval(1000)));
		result$.subscribe(value => console.log(value));
  	}
}
