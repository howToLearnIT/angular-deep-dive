import { Injectable } from "@angular/core";
import { AdminModule } from "../modules/admin";

@Injectable()
export class LocalService {
    value = 10;
     
    constructor() {
        console.log('Создан Local Service');
    }
}