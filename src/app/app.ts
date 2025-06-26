import { Component } from '@angular/core';
import { Card1 } from './components/card-1';


@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Card1],
})
export class App {}
