import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    selector: 'container-2',
    template: `
        <section>
            <ng-container *ngIf="isActive">
                <h3>Биограция</h3>
                <p>Что-то о пользователе</p>
            </ng-container>
        </section>
    `,
    styleUrl: './styles.css',
    imports: [CommonModule]
})
export class Container2 {
    isActive = true;
}