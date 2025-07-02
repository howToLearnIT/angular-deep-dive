import { LoggerService } from "./logger.service";

export class HeroService {
    private heroes = ['Бэтмен', 'Робин', 'Женщина-кошка'];

    constructor(
        private loggerService: LoggerService,
        private isAuthorized: boolean
    ) { }

    getHeroes(): string[] {
        const auth = this.isAuthorized ? 'авторизирован' : 'не авторизирован';
        this.loggerService.log(`Пользователь ${auth}`);

        return this.heroes.filter(() => this.isAuthorized);
    }
}