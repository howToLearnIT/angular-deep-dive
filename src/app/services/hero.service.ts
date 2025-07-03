import { EnvironmentInjector, inject, Injectable, Injector, runInInjectionContext } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class HeroService {
    private environmentInjector = inject(Injector);

    someMethod() {
        runInInjectionContext(this.environmentInjector, () => {
            const loggerService = inject(LoggerService); 
            loggerService.log('Лог из HeroService');
        });
    }
}