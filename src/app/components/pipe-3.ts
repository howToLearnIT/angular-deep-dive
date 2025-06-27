import { DatePipe, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'pipe-3',
    template: `
        {{ firstName + ' ' + lastName | uppercase }} <br/><br/>
        {{ isAdmin ? 'Доступ выдан' : 'Доступ запрещен' | uppercase }} <br/><br/>
        {{ (isAdmin ? 'Доступ выдан' : 'Доступ запрещен') | uppercase }}

    `,
    styleUrl: './styles.css',
    imports: [DatePipe, UpperCasePipe],
})
export class Pipe3 {
    firstName = 'Иван';
    lastName = 'Петров';

    isAdmin = true;
}