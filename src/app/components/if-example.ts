import { Component } from "@angular/core";

@Component({
    selector: 'if-example',
    template: `
        @if (a > b) {
            {{a}} больше {{b}}
        } @else if (b > a) {
            {{a}} меньше {{b}}
        } @else {
            {{a}} равно {{b}}
        }

        <br/><br/>

        @if (user.profile.settings.startDate; as startDate) {
            {{ startDate }}
        }
    `,
    styleUrl: './styles.css'

})
export class IfExample {
    a = 3;
    b = 3;

    user = {
        profile: {
            settings: {
                startDate: 'Сегодня'
            }
        }
    };

}