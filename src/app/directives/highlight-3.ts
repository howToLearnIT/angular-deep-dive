import {Directive, ElementRef, HostListener, inject, input} from '@angular/core';

@Directive({
  selector: '[highlight-3]',
})
export class Highlight3 {
	'highlight-3' = input<string>('yellow');

	private element = inject(ElementRef);

	@HostListener('mouseenter') 
	onMouseEnter() {
		this.highlight(this['highlight-3']());
	}

	@HostListener('mouseleave') 
	onMouseLeave() {
		this.highlight('');
	}

	private highlight(color: string) {
    	this.element.nativeElement.style.backgroundColor = color;
  	}
}