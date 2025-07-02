import { inject, Injectable } from "@angular/core";
import { UserService } from "./user.service";

@Injectable()
export class BetterLoggerService {
    userService = inject(UserService);

    log(message: string) {
        console.log(`Сообщение для ${this.userService.user}: ${message}`);
    }
}