import { Component, OnInit } from "@angular/core";
import { SuperMenu } from "../directives/super-menu";

@Component({
    selector: 'admin-menu-4',
    templateUrl: './admin-menu.html',
    hostDirectives: [{
		directive: SuperMenu,
  	}],
})
export class AdminMenu4 implements OnInit {
	ngOnInit(): void {
		console.log('Инициализация AdminMenu компонента')
	}
}