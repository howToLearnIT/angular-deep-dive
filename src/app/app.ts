import { Component, inject } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [RouterOutlet],
})
export class App {
	private router = inject(Router);

	onNavigateToAdmin() {
    	this.router.navigate(['/admin']);
	}

	onNavigateToBlog() {
    	this.router.navigate(['/blog'], {
			 queryParams: { category: 'cinema' }
		});
	}

	onNavigateToUser() {
    	this.router.navigate(['/user', 1]);
	}
}
