import { Component } from '@angular/core';
import { Pipe1 } from './components/pipe-1';
import { Pipe2 } from './components/pipe-2';
import { Pipe3 } from './components/pipe-3';
import { KebabCasePipe } from './pipes/kebab-case.pipe';
import { CustomTransformationPipe } from './pipes/custom-transformation';
import { JoinNamesImpurePipe } from './pipes/join-names-impure';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Pipe1, Pipe2, Pipe3, KebabCasePipe, CustomTransformationPipe, JoinNamesImpurePipe],
})
export class App {
	users = ['Alice', 'Bob'];

	onAddUser() {
		this.users.push('New User ' + Math.random());
  	}
}
