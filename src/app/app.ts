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

		// this.exampleEqual();
	}

	changeOption(newOptionIndex: number) {
		this.selectedOption.set(this.options()[newOptionIndex]);
	}

	exampleEqual() {
		const activeUser = signal({id: 123, name: 'Morgan', isAdmin: true});

		const activeUserEditCopy = linkedSignal(() => activeUser(), {
			equal: (a, b) => a.id === b.id,
		});

		// const activeUserEditCopy = linkedSignal({
		// 	source: activeUser,
		// 	computation: user => user,
		// 	equal: (a, b) => a.id === b.id,
		// });

		console.log('Юзер с возможностью редактирования ', activeUserEditCopy());

		activeUser.set({id: 123, name: 'NOT Morgan', isAdmin: false})

		console.log('Юзер с возможностью редактирования ', activeUserEditCopy());

		// activeUser.set({id: 1, name: 'NOT Morgan', isAdmin: false})

		// console.log('Юзер с возможностью редактирования ', activeUserEditCopy());
	}
}
