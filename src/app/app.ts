import { Component } from '@angular/core';
import { Highlight1 } from './directives/highlight-1';
import { Highlight2 } from './directives/highlight-2';
import { Highlight3 } from './directives/highlight-3';
import { NgClass } from '@angular/common';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Highlight1, Highlight2, Highlight3, NgClass],
})
export class App {
	isSpecial = true;
}
