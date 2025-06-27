import { CurrencyPipe, DatePipe, TitleCasePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'pipe-1',
    template: `
        <main>
            <h1>Перевод {{ company | titlecase }} от {{ purchasedOn | date }}</h1>
            <p>Всего: {{ amount | currency }}</p>
        </main>
    `,
    styleUrl: './styles.css',
    imports: [TitleCasePipe, DatePipe, CurrencyPipe]
})
export class Pipe1 {
    amount = 123.45;
    company = 'сбер мегамаркет';
    purchasedOn = '2024-07-08';
}