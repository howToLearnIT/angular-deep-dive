import { Component } from "@angular/core";

@Component({
    selector: 'for-example',
    template: `
        @for (user of users; track user.id) {
            {{ user.name }} <br/>
        }

        <br/><br/>

        @for (user of users; track user.id; let index = $index, even = $even, count = $count) {
            {{ user.name }} {{ index }},  Четность: {{even}}, Число всего {{count}} <br/><br/>
        }

        <br/><br/>

        @for (user of users; track user.id; let first = $first, last = $last, odd = $odd) {
            {{ user.name }} Первый {{first}}, Последний {{ last }}, Нечетный {{ odd }} <br/><br/>
        }

        @for (item of items; track item.name) {
            {{ item.name }}
        } @empty {
            Пусто
        }
    `,
    styleUrl: './styles.css'

})
export class ForExample {
    users = [
        {
            id: 1,
            name: 'Иван'
        },
        {
            id: 2,
            name: 'Алексей'
        },
        {
            id: 3,
            name: 'Сергей'
        },
        {
            id: 4,
            name: 'Мария'
        },
        {
            id: 5,
            name: 'Анастасия'
        },
        {
            id: 6,
            name: 'Владислав'
        },
    ];

    items: {name: string}[] = [];

}