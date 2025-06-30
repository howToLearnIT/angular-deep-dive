import { Component } from '@angular/core';
import { AdminMenu1 } from './components/admin-menu-1';
import { AdminMenu2 } from './components/admin-menu-2';
import { AdminMenu3 } from './components/admin-menu-3';
import { AdminMenu4 } from './components/admin-menu-4';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [AdminMenu1, AdminMenu2, AdminMenu3, AdminMenu4],
})
export class App {
	onMenuClosed() {
		console.log('Закрылось меню');
	}
}
