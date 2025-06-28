import { Component } from '@angular/core';
import { Template1 } from './components/template-1';
import { Template2 } from './components/template-2';
import { Template3 } from './components/template-3';
import { MyDirective } from './directives/my-directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Template1, Template2, Template3, MyDirective],
})
export class App {}
