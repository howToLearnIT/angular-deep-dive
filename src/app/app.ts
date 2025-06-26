import { Component } from '@angular/core';
import { Card1 } from './components/card-1';
import { Card2 } from './components/card-2';
import { Card3 } from './components/card-3';
import { CardHeader } from './components/card-header';
import { Card4 } from './components/card-4';
import { Card5 } from './components/card-5';
import { Card6 } from './components/card-6';
import { CardIcon } from './components/card-icon';
import { Card7 } from './components/card-7';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Card1, Card2, Card3, Card4, Card5, Card6, Card7, CardHeader, CardIcon],
})
export class App {}
