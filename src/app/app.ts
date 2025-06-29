import { Component } from '@angular/core';
import { Space1 } from './components/space-1';
import { Space2 } from './components/space-2';


@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Space1, Space2],
})
export class App {}
