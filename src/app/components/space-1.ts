import { Component } from "@angular/core";

@Component({
    selector: 'space-1',
    template: `
        <section>
            <h3>Профайл</h3>

            <label>
                Имя
                <input/>
            </label>
        </section>

        <p>Привет         мир</p>

        <!-- Как будет выглядеть -->
        <p>Привет мир</p>
    `,
    styleUrl: './styles.css',
})
export class Space1 {}

        // <!-- Пропущено пробелов: 20 -->
        // <section>###<h3>Профайл</h3>###<label>#####Имя#####<input/>###</label>#</section>
