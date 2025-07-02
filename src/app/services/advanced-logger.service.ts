import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

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