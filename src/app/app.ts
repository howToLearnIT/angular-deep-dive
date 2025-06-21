import { Component, effect, linkedSignal, Signal, signal, untracked, WritableSignal } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-root',
  template: `
      Смотри консоль
  `,
  imports: [],
})
export class App {
	options: WritableSignal<number[]> = signal([1, 2, 3, 4, 5]);

	selectedOption = signal(this.options()[0]);
	// selectedOption = linkedSignal(() => this.options()[0]);

	constructor() {
		console.log('Выбранная опция ', this.selectedOption())

		timer(1000).subscribe(()=> {
			this.changeOption(2);
			console.log('Выбранная опция ', this.selectedOption())
		})

		timer(3000).subscribe(()=> {
			this.options.set([5, 4, 3, 2, 1])
			console.log('Выбранная опция ', this.selectedOption())
		})
	}

	changeOption(newOptionIndex: number) {
		this.selectedOption.set(this.options()[newOptionIndex]);
	}
}
