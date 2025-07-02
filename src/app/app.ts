import { Component, inject, OnInit } from '@angular/core';
import { Component1 } from './components/component-1';
import { Component2 } from './components/component-2';
import { Component3 } from './components/component-3';
import { Component4 } from './components/component-4';
import { Component5 } from './components/component-5';
import { Component6 } from './components/component-6';

import { AppConfig } from './interfaces/app-config';
import { APP_CONFIG } from './tokens/app-config';
import { SCROLL_REF } from './tokens/scroll-ref';
import { ScrollRef } from './directives/scroll-ref';

const MY_APP_CONFIG: AppConfig = {
  title: 'Дэшборд',
};

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1, Component2, Component3, Component4, Component5, Component6, ScrollRef],
	providers: [{ provide: APP_CONFIG, useValue: MY_APP_CONFIG }],
	// providers: [{ provide: AppConfig, useValue: MY_APP_CONFIG }],
})
export class App implements OnInit {
	scrollRef = inject(SCROLL_REF);

	ngOnInit(): void {
		console.log('Scroll ref ', this.scrollRef);
	}
}
