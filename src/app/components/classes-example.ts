import { Component } from "@angular/core";

@Component({
    selector: 'classes-example',
    template: `
        <p class="text" [class.expanded]="isExpanded"> Текс </p>
        <ul [class]="listClasses"> <li>Айтем</li> </ul>
        <section [class]="sectionClasses"> Секция </section>
        <button [class]="buttonClasses"> Кнпока </button>
    `,
    styleUrl: './styles.css'
})
export class ClassesExample {
    isExpanded = true;

    listClasses = 'full-width outlined';

    sectionClasses = ['expandable', 'elevated'];

    buttonClasses = {
        highlighted: true,
        large: false,
    };
}