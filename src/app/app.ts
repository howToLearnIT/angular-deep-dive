import { Component } from '@angular/core';
import { Child } from './components/child';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Child],
})
export class App {
	onNameChange(name: string) {
		console.log('Имя изменилось на ', name);
	}
}
