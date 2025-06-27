import { Component } from '@angular/core';
import { IfExample } from './components/if-example';
import { ForExample } from './components/for-example';
import { SwitchExample } from './components/switch-example';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [IfExample, ForExample, SwitchExample],
})
export class App {}
