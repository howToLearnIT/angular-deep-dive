import { Component } from '@angular/core';
import { combineLatest, combineLatestAll, concat, concatAll, concatMap, exhaustAll, forkJoin, fromEvent, interval, map, mergeAll, Observable, of, race, range, share, shareReplay, startWith, switchAll, take, timer, withLatestFrom, zip } from 'rxjs';

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
		// this.example12();
		// this.example13();
	}

	example1() {
		const firstTimer$ = timer(0, 1000); 

		// firstTimer$.subscribe((res) => console.log('FIRST TIMER ', res));

		const secondTimer$ = timer(500, 1000);

		// secondTimer$.subscribe((res) => console.log('SECOND TIMER ', res));

		const combinedTimers$ = combineLatest([firstTimer$, secondTimer$]);

		combinedTimers$.subscribe(value => console.log(value));
	}

	example2() {
		const timer$ = interval(1000).pipe(take(4));
		const sequence$ = range(1, 10);

		concat(timer$, sequence$).subscribe(value => console.log(value));
  	}

	example3() {
		const observable$ = forkJoin({
			foo: of(1, 2, 3, 4),
			bar: Promise.resolve(8),
			baz: interval(2000).pipe(take(2))
		});

		// const observable$ = forkJoin([
		// 	of(1, 2, 3, 4),
		// 	Promise.resolve(8),
		// 	timer(4000)
		// ]);

		observable$.subscribe({
			next: value => console.log(value),
			complete: () => console.log('Конец!'),
		});
  	}

	example4() {
		const obs1$ = interval(7000).pipe(map(() => 'slow one'));
		const obs2$ = interval(3000).pipe(map(() => 'fast one'));
		const obs3$ = interval(5000).pipe(map(() => 'medium one'));

		race(obs1$, obs2$, obs3$)
			.subscribe(winner => console.log(winner));
  	}

	example5() {
		const age$ = of(25, 30, 35); // 3 значения
		const name$ = of('Алиса', 'Боб'); // 2 значения
		const timer$ = interval(1000).pipe(take(2)); // 0 (через 1 сек), 1 (через 2 сек)

		zip(age$, name$, timer$).pipe(
			map(([age, name, timer]) => ({ age, name, timer }))
		)
		.subscribe(x => console.log(x));
  	}

	example6() {
		const source$ = of(1, 2, 3); // Внешний Observable

		const result$ = source$.pipe(
			map(value => 
				interval(1000).pipe(
					take(2),
					map(innerValue => `Внешник ${value}, Внутряк ${innerValue}`)
				)
			),
			combineLatestAll() // Подписывается на все внутренние Observable
		);

		result$.subscribe(result => console.log(result));
  	}

	example7() {
		const clicks$ = fromEvent(document, 'click');

		const higherOrder$ = clicks$.pipe(
			map(() => interval(1000).pipe(take(3)))
		);

		// clicks$.pipe(
		// 	concatMap(() => interval(1000).pipe(take(3)))
		// ).subscribe(result => console.log(result))

		const firstOrder$ = higherOrder$.pipe(concatAll());

		firstOrder$.subscribe(result => console.log(result));
  	}

	example8() {
		const clicks$ = fromEvent(document, 'click');

		const higherOrder$ = clicks$.pipe(
			map(() => interval(1000).pipe(take(3)))
		);

		// clicks$.pipe(
		// 	mergeMap(() => interval(1000).pipe(take(3)))
		// ).subscribe(result => console.log(result))

		const firstOrder$ = higherOrder$.pipe(mergeAll());

		firstOrder$.subscribe(result => console.log(result));
  	}

	example9() {
		const clicks$ = fromEvent(document, 'click');

		const higherOrder$ = clicks$.pipe(
			map(() => interval(1000).pipe(take(3)))
		);

		// clicks.pipe(
		// 	switchMap(() => interval(1000).pipe(take(3)))
		// ).subscribe(result => console.log(result))

		const firstOrder$ = higherOrder$.pipe(switchAll());

		firstOrder$.subscribe(result => console.log(result));
  	}

	example10() {
		const clicks$ = fromEvent(document, 'click');

		const higherOrder$ = clicks$.pipe(
			map(() => interval(1000).pipe(take(3)))
		);

		// clicks.pipe(
		// 	exhaustMap(() => interval(1000).pipe(take(3)))
		// ).subscribe(result => console.log(result))

		const firstOrder$ = higherOrder$.pipe(exhaustAll());

		firstOrder$.subscribe(result => console.log(result));
  	}

	example11() {
		timer(1000)
		.pipe(
			startWith('Первое значение'),
		)
		.subscribe(x => console.log(x));
  	}

	example12() {
		const clicks$ = fromEvent(document, 'click');
		const timer$ = interval(10000);
		const result$ = clicks$.pipe(withLatestFrom(timer$));
		// const combinedTimers$ = combineLatest([firstTimer$, secondTimer$]);

		result$.subscribe(x => console.log(x));
  	}

	example13() {
		// const source$ = new Observable(observer => {
		// 	console.log('Side effect!'); // Выполнится для каждого подписчика
		// 	observer.next(Math.random());
		// })

		const source$ = new Observable(observer => {
			console.log('Side effect!'); // Выполнится только один раз
			observer.next(Math.random());
		}).pipe(shareReplay());

		source$.subscribe(console.log); // Случайное число 1
		source$.subscribe(console.log); // Случайное число 2 (side effect снова выполнился)
  	}
}
