import { Component } from "@angular/core";

@Component({
    selector: 'styles-example',
    template: `
        <p [style.display]="isExpanded ? 'block' : 'none'"> Текст </p>
        <p [style.height.px]="height"> Текст </p>

        <section [style]="sectionStyles"> Секция </section>

    `,
    styleUrl: './styles.css'
})
export class StylesExample {
    isExpanded = true;
    height = 100;

    sectionStyles = {
        border: '1px solid black',
        'font-weight': 'bold',
    };
}