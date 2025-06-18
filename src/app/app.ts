import { Component } from '@angular/core';
import { delay, from, fromEvent, interval, of, range, tap, timer, timestamp, toArray } from 'rxjs';

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
    of(Math.random()).pipe(
      tap((value)=> console.log('Я побочный эффект ',value)),
    ).subscribe(console.log);
  }

  example2() {
    fromEvent(document, 'click')
      .pipe(
        delay(1000)
      )
      .subscribe(event => console.log(event));
  } 

  example3() {
    fromEvent(document, 'click')
      .pipe(
        timestamp()
      )
      .subscribe(event => console.log(event));
  } 

  example4() {
    of(1, 2, 3, 4, 5).pipe(
      toArray()
    ).subscribe(console.log);
  }
}
