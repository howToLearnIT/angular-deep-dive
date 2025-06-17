import { Component } from '@angular/core';
import { fromEvent, map, scan, throttleTime } from 'rxjs';

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
    // document.addEventListener('click', () => console.log('Clicked!'));
    fromEvent(document, 'click').subscribe(() => console.log('Clicked!'));
  }

  example2() {
    // let count = 0;
    // document.addEventListener('click', () => console.log(`Clicked ${++count} times`));

    fromEvent(document, 'click')
      .pipe(scan((count) => count + 1, 0))
      .subscribe((count) => console.log(`Clicked ${count} times`));
  }

  example3() {
    // let count = 0;
    // let rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', () => {
    //   if (Date.now() - lastClick >= rate) {
    //     console.log(`Clicked ${++count} times`);
    //     lastClick = Date.now();
    //   }
    // });
  
    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        scan((count) => count + 1, 0)
      )
      .subscribe((count) => console.log(`Clicked ${count} times`));
  }

  example4() {
    // let count = 0;
    // const rate = 1000;
    // let lastClick = Date.now() - rate;
    // document.addEventListener('click', (event) => {
    //   if (Date.now() - lastClick >= rate) {
    //     count += event.clientX;
    //     console.log(count);
    //     lastClick = Date.now();
    //   }
    // });
  
    fromEvent(document, 'click')
      .pipe(
        throttleTime(1000),
        map((event) => (event as MouseEvent).clientX),
        scan((count, clientX) => count + clientX, 0)
      )
      .subscribe((count) => console.log(count));
      }
}
