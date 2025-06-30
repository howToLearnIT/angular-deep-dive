import { Component } from '@angular/core';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { IfAuth } from './directives/if-auth';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [CommonModule, NgTemplateOutlet, IfAuth],
})
export class App {
	isActive = true;
	items = [1, 2, 3, 4, 5];
}
