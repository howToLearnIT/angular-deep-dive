import { Component } from '@angular/core';
import { Slider1 } from './components/slider-1';
import { Slider2 } from './components/slider-2';
import { ProfilePhoto } from './components/profile-photo';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [Slider1, Slider2, ProfilePhoto],
})
export class App {}
