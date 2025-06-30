import { Component } from "@angular/core";
import { MenuBehavior } from "../directives/menu-behavior";

@Component({
    selector: 'admin-menu-2',
    templateUrl: './admin-menu.html',
    hostDirectives: [{
		directive: MenuBehavior,
		inputs: ['menuId'],
		outputs: ['menuClosed'],
  	}],
})
export class AdminMenu2 {}