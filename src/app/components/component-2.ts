import { Component, inject, OnInit } from "@angular/core";
import { LoggerService } from "../services/logger.service";
import { BetterLoggerService } from "../services/better-logger.service";
import { UserService } from "../services/user.service";

@Component({
    selector: 'component-2',
    template: 'Компонент 2',
    providers: [
        UserService,
        { provide: LoggerService, useClass: BetterLoggerService }
    ]
})
export class Component2 implements OnInit {
    loggerService = inject(LoggerService);

    ngOnInit(): void {
        this.loggerService.log('Стандартный лог');
    }
}