import { Component, OnInit, signal } from '@angular/core';
import { UserProfile } from './components/user-profile';
import { timer } from 'rxjs';


@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [UserProfile],
})
export class App implements OnInit {
	showUser = signal(true);
	name = signal('Иван');

	ngOnInit(): void {
		timer(3000).subscribe(()=> {
			this.name.set('Валентин')
		})

		timer(6000).subscribe(()=> {
			this.showUser.set(false);
		})
	}
}
