import { Component } from '@angular/core';

class Subject {
    private observers: Array<(data: string) => void> = [];

    subscribe(observer: (data: string) => void) {
        this.observers.push(observer);
    }

    unsubscribe(observer: (data: string) => void) {
        this.observers = 
          this.observers.filter((currenctObserver) => currenctObserver !== observer);
    }

    notify(data: string) {
        this.observers.forEach(observer => observer(data));
    }
}

// Использование
const subject = new Subject();

const observer1 = (data: string) => console.log(`Наблюдатель 1: ${data}`);
const observer2 = (data: string) => console.log(`Наблюдатель 2: ${data}`);

subject.subscribe(observer1);
subject.subscribe(observer2);

subject.notify("Привет!"); 

// Вывод:
// Наблюдатель 1: Привет!
// Наблюдатель 2: Привет!

subject.unsubscribe(observer1);
subject.notify("Мир!"); 
// Вывод: Наблюдатель 2: Мир!

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {}
