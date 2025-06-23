import { Component } from '@angular/core';
import { Component1 } from './components/component-1';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1],
})
export class App {}
