import {Directive, ElementRef, HostListener, inject} from '@angular/core';

@Directive({
  selector: '[highlight-2]',
})
export class Highlight2 {
	private element = inject(ElementRef);

	@HostListener('mouseenter') 
	onMouseEnter() {
		this.highlight('yellow');
	}

	@HostListener('mouseleave') 
	onMouseLeave() {
		this.highlight('');
	}

	private highlight(color: string) {
    	this.element.nativeElement.style.backgroundColor = color;
  	}
}