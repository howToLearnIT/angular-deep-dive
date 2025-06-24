import { Component } from '@angular/core';
import { Component1 } from './components/component-1';
import { Component2 } from './components/component-2';
import { Component3 } from './components/component-3';
import { Component4 } from './components/component-4';
import { Component5 } from './components/component-5';
import { Component6 } from './components/component-6';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1, Component2, Component3, Component4, Component5, Component6],
})
export class App {}
