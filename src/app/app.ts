import { AfterViewInit, Component, signal, ViewChild } from '@angular/core';
import { ExpandablePanel } from './components/expandable-panel';

@Component({
	selector: 'app-root',
	templateUrl: './app.html',
	styleUrl: './app.css',
	imports: [ExpandablePanel],
})
export class App implements AfterViewInit {
	@ViewChild('panel') panelRef: ExpandablePanel | null = null

	ngAfterViewInit(): void {
		this.panelRef?.panelSelected.subscribe((panel)=> {
			console.log('Подписался не через шаблон ', panel)
		})
	}

	onPanelSelected(panel: number): void {
		console.log('Выбрана панель ', panel);
	}

	onClosed(closed: boolean): void {
		console.log('Закрылся ', closed)
	}
}
