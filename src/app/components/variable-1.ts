import { AsyncPipe, DatePipe, JsonPipe } from "@angular/common";
import { Component } from "@angular/core";
import { of } from "rxjs";

@Component({
    selector: 'variable-1',
    template: `
        @let name = user.name;
        @let greeting = 'Привет, ' + name;
        @let data = data$ | async | date;
        @let pi = 3.1459;
        @let coordinates = {x: 50, y: 100};
        @let longExpression = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit ' +
                      'sed do eiusmod tempor incididunt ut labore et dolore magna ' +
                      'Ut enim ad minim veniam...';

        
        <p> Имя {{ name }} </p> 
        <p> {{ greeting }} </p> 
        <p> Дата {{ data }} </p> 
        <p> {{pi}} </p> 
        <p> {{coordinates | json}} </p> 
        <p> {{longExpression}} </p> 
    `,
    styleUrl: './styles.css',
    imports: [AsyncPipe, DatePipe, JsonPipe]
})
export class Variable1 {
    user = {
        name: 'Иван',
    };

    data$ = of(new Date());
}