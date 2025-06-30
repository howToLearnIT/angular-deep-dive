import { Component } from "@angular/core";
import { MenuBehavior } from "../directives/menu-behavior";

@Component({
	selector: 'admin-menu-1',
	templateUrl: './admin-menu.html',
	hostDirectives: [MenuBehavior],
})
export class AdminMenu1 { }