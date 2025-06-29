import { Component } from '@angular/core';
import { Variable1 } from './components/variable-1';
import { Variable2 } from './components/variable-2';
import { Variable3 } from './components/variable-3';
import { Ref } from './components/ref';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Variable1, Variable2, Variable3, Ref],
})
export class App {}
