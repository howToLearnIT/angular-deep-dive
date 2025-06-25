import { Component } from '@angular/core';
import { Card1 } from './components/card-1';
import { Card2 } from './components/card-2';
import { Card3 } from './components/card-3';
import { CardTitle } from './components/card-title';
import { CardDescription } from './components/card-description';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Card1, Card2, Card3, CardTitle, CardDescription],
})
export class App {

}
