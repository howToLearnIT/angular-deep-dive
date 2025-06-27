import { DatePipe, UpperCasePipe } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'pipe-2',
    template: `
        Событие произошло {{ today | date | uppercase }}
        в {{ today | date : 'hh:mm' }}
    `,
    styleUrl: './styles.css',
    imports: [DatePipe, UpperCasePipe],
})
export class Pipe2 {
    today = new Date();
}