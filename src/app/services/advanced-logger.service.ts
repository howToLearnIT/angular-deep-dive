import { Injectable } from "@angular/core";

@Injectable()
export class AdvancedLoggerService {
    log(message: string) {
        console.log(message);
    }

    warn(message: string) {
        console.warn(message);
    }

    error(message: string) {
        console.error(message);
    }
}