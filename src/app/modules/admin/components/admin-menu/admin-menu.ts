import { Component, inject, OnInit } from "@angular/core";
import { MenuBehavior } from "../directives";
import { UserService } from "../../services";

@Component({
	selector: 'admin-menu',
	templateUrl: './admin-menu.html',
	// hostDirectives: [MenuBehavior],
	standalone: false,
})
export class AdminMenu implements OnInit {
	userService = inject(UserService);

	ngOnInit(): void {
		console.log('Инициализация AdminMenu');
		console.log('Пользователь ', this.userService.user);
	}
}