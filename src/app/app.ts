import { Component, inject, OnInit } from '@angular/core';
import { Component1 } from './components/component-1';
import { Component2 } from './components/component-2';
import { SCROLL_REF } from './tokens/scroll-ref';
import { ScrollRef } from './directives/scroll-ref';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1, Component2, ScrollRef],
})
export class App implements OnInit {
	scrollRef = inject(SCROLL_REF);

	ngOnInit(): void {
		console.log('Scroll ref ', this.scrollRef);
	}
}
