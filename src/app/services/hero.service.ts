import { inject, Injectable, Injector, runInInjectionContext } from "@angular/core";
import { LoggerService } from "./logger.service";

@Injectable()
export class HeroService {
    private injector = inject(Injector);

    someMethod() {
        runInInjectionContext(this.injector, () => {
            const loggerService = inject(LoggerService); 
            loggerService.log('Лог из HeroService');
        });
    }
}