import { Component } from '@angular/core';
import { Template1 } from './components/template-1';
import { Template2 } from './components/template-2';
import { Template3 } from './components/template-3';
import { Template4 } from './components/template-4';
import { Template5 } from './components/template-5';
import { Template6 } from './components/template-6';
import { Template7 } from './components/template-7';

import { MyDirective } from './directives/my-directive';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Template1, Template2, Template3, Template4, Template5, Template6, Template7, MyDirective],
})
export class App {}
