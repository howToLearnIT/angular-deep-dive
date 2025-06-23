import { Component } from '@angular/core';
import { ProfilePhoto } from './components/component-1';
import { ResetButton } from './components/component-2';
import { Menu } from './components/component-3';
import { DropZone } from './components/component-4';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [ProfilePhoto, ResetButton, Menu, DropZone],
})
export class App {}
