import { HeroService } from "./hero.service";
import { LoggerService } from "./logger.service";
import { UserService } from "./user.service";

const heroServiceFactory = (loggerService: LoggerService, userService: UserService) =>
    new HeroService(loggerService, userService.isAuthorized);

export const heroServiceProvider = {
    provide: HeroService,
    useFactory: heroServiceFactory,
    deps: [LoggerService, UserService]
};