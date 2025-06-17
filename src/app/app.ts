import { Component } from '@angular/core';
import { fromEvent, map, Observable, scan, throttleTime } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {

  constructor() {
    // this.example1();
    this.example2();
  }

  example1() {
    const myPromise = new Promise<number>((resolve, reject) => {
      setTimeout(() => {
        resolve(2);
        // reject();
      }, 300);
    });

    myPromise
      .then((count) => count * count)
      .then((result) => {
        console.log('Result ', result)
      })
  }

  example2() {
    const observable = new Observable<number>((subscriber) => {
      subscriber.next(1);
      subscriber.next(2);
      subscriber.next(3);
      setTimeout(() => {
        subscriber.next(4);
        subscriber.error(-1);
        subscriber.complete();
      }, 1000);
    });

    const observer = {
      next: ((x: number) => console.log('Next: ' + x)),
      error: ((err: number) => console.error('Error: ' + err)),
      complete: () => console.log('Completed'),
    };

    observable.subscribe(observer);

  }
}
