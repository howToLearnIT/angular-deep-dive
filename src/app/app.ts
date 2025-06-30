import { Component } from '@angular/core';
import { MyComponent } from './components/component';
import { MyDirective } from './directives/directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [MyComponent, MyDirective],
})
export class App {}
