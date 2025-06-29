import { Component } from "@angular/core";

@Component({
    selector: 'container-1',
    template: `
        <section>
            <ng-container>
                <h3>Биограция</h3>
                <p>Что-то о пользователе</p>
            </ng-container>
        </section>
    `,
    styleUrl: './styles.css',
})
export class Container1 {}