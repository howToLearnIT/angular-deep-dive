import { Component } from "@angular/core";

@Component({
    selector: 'attribute-example',
    template: `
        <ul [attr.role]="listRole">
            <li>Айтем</li>
        </ul>

        <button attr.aria-label="Сохраняем в {{ place }}"> Кнопка</button>
    `,
    styleUrl: './styles.css'

})
export class AttributeExample {
    listRole = 'Список полезностей';
    place = 'Архив';
}