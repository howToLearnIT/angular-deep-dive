import { Component, inject, OnInit } from "@angular/core";
import { LoggerService } from "../services/logger.service";
import { AdvancedLoggerService } from "../services/advanced-logger.service";

@Component({
    selector: 'component-1',
    template: 'Компонент 1',
    providers: [LoggerService, AdvancedLoggerService],
    // providers: [{ provide: LoggerService, useClass: LoggerService }]
})
export class Component1 implements OnInit {
    loggerService = inject(LoggerService);

    constructor(private advancedLoggerService: AdvancedLoggerService) {}

    ngOnInit(): void {
        this.loggerService.log('Стандартный лог');
        this.advancedLoggerService.warn('Предупреждаем!')
    }
}