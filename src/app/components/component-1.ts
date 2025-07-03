import { Component, inject, OnInit } from "@angular/core";
import { BrowserStorageService } from "../services/browser-storage.service";

@Component({
    selector: 'component-1',
    template: 'Компонент 1',
    providers: [BrowserStorageService],
})
export class Component1 implements OnInit {
    storageService = inject(BrowserStorageService);

    ngOnInit(): void {
        this.storageService.set('id', '1')
        console.log('ID ', this.storageService.get('id'));
    }
}