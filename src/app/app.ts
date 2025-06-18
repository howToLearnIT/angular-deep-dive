import { Component } from '@angular/core';
import { catchError, map, of, retry } from 'rxjs';

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
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError(err => of('I', 'II', 'III', 'IV', 'V'))
      )
      .subscribe(x => console.log(x));
  }

  example2() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        catchError((err, caught) => {
          return caught
        }),
      )
      .subscribe(x => console.log(x));
  } 

  example3() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        retry(3)
      )
      .subscribe({
        next: (data) => console.log('Успех:', data),
        error: (err) => console.error('Ошибка после 3 попыток:', err),
      });
  } 

  example4() {
    of(1, 2, 3, 4, 5)
      .pipe(
        map(n => {
          if (n === 4) {
            throw 'four!';
          }
          return n;
        }),
        retry({
          count: 3,
          delay: 1000, // Фиксированная задержка 1 сек
        })
      )
      .subscribe({
        next: (data) => console.log('Успех:', data),
        error: (err) => console.error('Ошибка после 3 попыток:', err),
      });
  }
}
