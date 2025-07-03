import { inject, Injectable } from "@angular/core";
import { BROWSER_STORAGE } from "../tokens/browser-storage";

@Injectable({
    providedIn: 'root'
})
export class BrowserStorageService {
    storage = inject(BROWSER_STORAGE);

    get(key: string) {
        return this.storage.getItem(key);
    }

    set(key: string, value: string) {
        this.storage.setItem(key, value);
    }
}