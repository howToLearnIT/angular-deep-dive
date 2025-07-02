import { Component, inject, OnInit } from "@angular/core";
import { LoggerService } from "../services/logger.service";
import { AdvancedLoggerService } from "../services/advanced-logger.service";
import { heroServiceProvider } from "../services/hero.service.provider";
import { HeroService } from "../services/hero.service";
import { UserService } from "../services/user.service";

@Component({
    selector: 'component-4',
    template: 'Компонент 4',
    providers: [
        UserService,
        LoggerService,
        heroServiceProvider
    ]
})
export class Component4 implements OnInit {
    heroService = inject(HeroService);

    ngOnInit(): void {
        console.log('Герои ', this.heroService.getHeroes());
    }
}