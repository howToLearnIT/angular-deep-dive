import { Component } from '@angular/core';
import { concatMap, from, groupBy, map, mergeMap, of, pairwise, scan, switchMap, toArray } from 'rxjs';

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
	}

	example1() {
		of(1, 2, 3, 4, 5)
			.pipe(
				map(count => count * count),
			)
			.subscribe(result => console.log(result));
	}

	example2() {
		of(1, 2, 3)
			.pipe(
				scan((total, n) => total + n, 0),
			)
			.subscribe(result => console.log(result));
  	}

	example3() {
		from([1, 2, 3])
			.pipe(
				mergeMap(id => fetch(`https://pokeapi.co/api/v2/pokemon/ditto?id=${id}`))
			)
			.subscribe(post => console.log(post));
  	}

	example4() {
		from([1, 2, 3])
			.pipe(
				concatMap(id => fetch(`https://pokeapi.co/api/v2/pokemon/ditto?id=${id}`))
			)
			.subscribe(post => console.log(post));
  	}

	example5() {
		from([1, 2, 3])
			.pipe(
				switchMap(id => fetch(`https://pokeapi.co/api/v2/pokemon/ditto?id=${id}`))
			)
			.subscribe(post => console.log(post));
  	}

	example6() {
		of(
			{ id: 1, name: 'JavaScript' },
			{ id: 2, name: 'Parcel' },
			{ id: 2, name: 'webpack' },
			{ id: 1, name: 'TypeScript' },
			{ id: 3, name: 'TSLint' }
		).pipe(
			groupBy(p => p.id),
			mergeMap(group => group.pipe(toArray()))   
		)
		.subscribe(p => console.log(p));
  	}

	example7() {
		of(1, 2, 3, 4, 5)
			.pipe(
				pairwise()
			)
			.subscribe(pair => console.log(pair));
  	}
}
