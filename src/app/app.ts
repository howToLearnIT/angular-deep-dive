import { Component } from '@angular/core';
import { Container1 } from './components/container-1';
import { Container2 } from './components/container-2';
import { Container3 } from './components/container-3';
import { Container4 } from './components/container-4';
import { Container5 } from './components/container-5';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Container1, Container2, Container3, Container4, Container5],
})
export class App {}
