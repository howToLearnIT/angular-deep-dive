import { assertInInjectionContext, Component, inject, OnInit } from "@angular/core";
import { HeroService } from "../services/hero.service";
import { LoggerService } from "../services/logger.service";

@Component({
    selector: 'component-2',
    template: 'Компонент 2',
    providers: [LoggerService, HeroService],
})
export class Component2 implements OnInit {
    heroService = inject(HeroService);
    
    constructor() {
        assertInInjectionContext(Component2)
    }

    ngOnInit(): void {
        // assertInInjectionContext(Component2)

        this.heroService.someMethod();
    }
}