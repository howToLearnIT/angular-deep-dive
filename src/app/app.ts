import { Component } from '@angular/core';
import { TemplateExample } from './components/template-example';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [TemplateExample],
})
export class App {}
