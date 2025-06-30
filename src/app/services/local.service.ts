import { Injectable } from "@angular/core";

@Injectable()
export class LocalService {
    value = 10;
     
    constructor() {
        console.log('Создан Local Service');
    }
}