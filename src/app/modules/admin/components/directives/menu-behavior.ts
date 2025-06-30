import {Directive, input, OnInit, output} from '@angular/core';
import { timer } from 'rxjs';

@Directive({
	selector: '[menu-behavior]',
	standalone: false,
})
export class MenuBehavior implements OnInit {
	menuId = input<string>()
	menuClosed = output();

	ngOnInit(): void {
		console.log('Директива menu-behavior ', this.menuId());
		this.close();
	}

	private close() {
		timer(3000).subscribe(() => {
			this.menuClosed.emit();
		});
	}
}