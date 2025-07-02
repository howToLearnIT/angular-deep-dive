import { Component, inject, OnInit } from "@angular/core";
import { LoggerService } from "../services/logger.service";

@Component({
    selector: 'component-1',
    template: 'Компонент 1',
    providers: [LoggerService],
    // providers: [{ provide: LoggerService, useClass: LoggerService }]
})
export class Component1 implements OnInit {
    loggerService = inject(LoggerService);

    ngOnInit(): void {
        this.loggerService.log('Стандартный лог');
    }
}