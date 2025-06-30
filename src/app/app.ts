import { Component, inject, OnInit } from '@angular/core';
import { Component1 } from './components/component-1';
import { Component2 } from './components/component-2';
import { LocalService } from './services/local.service';
import { AdminModule } from './modules/admin';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Component1, Component2, AdminModule],
})
export class App implements OnInit {
	// localService = inject(LocalService);

	ngOnInit(): void {
        // console.log('Получил значение из локального сервиса', this.localService.value);
	}
}
