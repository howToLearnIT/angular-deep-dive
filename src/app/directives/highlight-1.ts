import {Directive, ElementRef, inject} from '@angular/core';

@Directive({
  selector: '[highlight-1]',
})
export class Highlight1 {
	private element = inject(ElementRef);

	constructor() {
    	this.element.nativeElement.style.backgroundColor = 'yellow';
  	}
}