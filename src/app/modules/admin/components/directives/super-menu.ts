import { Directive, OnInit } from "@angular/core";
import { MenuBehavior } from "./menu-behavior";

@Directive({
    selector: '[super-menu]',
    // hostDirectives: [{
	// 	directive: MenuBehavior,
	// 	inputs: ['menuId'],
	// 	outputs: ['menuClosed'],
  	// }],
    standalone: false,
})
export class SuperMenu implements OnInit {
    ngOnInit(): void {
        console.log('Супер меню ');
    }
}