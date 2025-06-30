import { Component } from "@angular/core";
import { MenuBehavior } from "../directives/menu-behavior";

@Component({
    selector: 'admin-menu-3',
    templateUrl: './admin-menu.html',
    hostDirectives: [{
		directive: MenuBehavior,
		inputs: ['menuId: id'],
		outputs: ['menuClosed: closed'],
  	}],
})
export class AdminMenu3 {}