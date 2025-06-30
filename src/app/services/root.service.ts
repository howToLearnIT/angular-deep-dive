import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class RootService {
    value = 1;
     
    constructor() {
        console.log('Создан Root Service');
    }
}