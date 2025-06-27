import { Component } from '@angular/core';
import { AttributeExample } from './components/attribute-example';
import { ClassesExample } from './components/classes-example';
import { StylesExample } from './components/styles-example';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [AttributeExample, ClassesExample, StylesExample],
})
export class App {}
