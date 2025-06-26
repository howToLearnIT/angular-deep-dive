import { Component, computed, contentChild, contentChildren, OnInit } from "@angular/core";
import { CardHeader } from "./card-header";
import { CardIcon } from "./card-icon";

@Component({
    selector: 'card-7',
    template: `
        <ng-content />
    `,
    imports: [],
})
export class Card7 implements OnInit {
    icon = contentChild(CardIcon);
    icons = contentChildren(CardIcon);

    ngOnInit() {
        console.log('ICON ', this.icon())
        console.log('ICONS ', this.icons())
    }
}