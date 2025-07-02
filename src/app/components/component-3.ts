import { Component, inject, OnInit } from "@angular/core";
import { LoggerService } from "../services/logger.service";
import { AdvancedLoggerService } from "../services/advanced-logger.service";

@Component({
    selector: 'component-3',
    template: 'Компонент 3',
    providers: [
        AdvancedLoggerService,
        { provide: LoggerService, useClass: AdvancedLoggerService }
    ]
})
export class Component3 implements OnInit {
    loggerService = inject(LoggerService);
    advancedLoggerService = inject(AdvancedLoggerService);

    ngOnInit(): void {
        this.loggerService.log('Стандартный лог');
        this.advancedLoggerService.warn('Предупреждение');
    }
}