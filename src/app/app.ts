import { Component, signal } from '@angular/core';
import { Component1 } from './components/component-1';
import { Component2 } from './components/component-2';
import { Component3 } from './components/component-3';
import { Component4 } from './components/component-4';
import { Component5 } from './components/component-5';
import { Component6 } from './components/component-6';
import { Component7 } from './components/component-7';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1, Component2, Component3, Component4, Component5, Component6, Component7],
})
export class App {
	volume = signal(0);

	onIncrease() {
		this.volume.update(oldValue => oldValue + 100);
	}

	onVolumeChange(volume: number) {
		console.log('Обновленное значение ', volume);
	}
}
