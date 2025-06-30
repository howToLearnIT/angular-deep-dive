import { Component } from '@angular/core';
import { AdminModule } from './modules';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [AdminModule],
})
export class App {}
