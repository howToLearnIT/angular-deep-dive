import { Component } from '@angular/core';
import { from, fromEvent, interval, of, range, timer } from 'rxjs';

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
  }

  example1() {
    const array = [10, 20, 30];
    const result = from(array);

    result.subscribe(x => console.log(x));
  }

  example2() {
    const promise = fetch('https://api.github.com/users?per_page=5');
    from(promise).subscribe(data => console.log(data));
  } 

  example3() {
    fromEvent(document, 'click').subscribe(event => console.log(event));
  } 

  example4() {
    timer(1000).subscribe(data => console.log(data));
  }

  example5() {
    interval(1000).subscribe(count => console.log(count));
  }

  example6() {
    range(1, 3).subscribe(x => console.log(x));
  }

  example7() {
    of(10, 20).subscribe(x => console.log(x));
  }
}
