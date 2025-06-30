import {Directive, inject, OnInit, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[if-auth]',
})
export class IfAuth implements OnInit {
	templateRef = inject(TemplateRef);
	viewContainerRef = inject(ViewContainerRef);

	auth = true;
	
	ngOnInit(): void {
		this.renderIfAuth();
	}

	private renderIfAuth() {
		if (this.auth) {
			this.viewContainerRef.createEmbeddedView(this.templateRef);
		} else {
			this.viewContainerRef.clear();
		}
	}

}