import { NgTemplateOutlet } from "@angular/common";
import { Component } from "@angular/core";
import { AdminProfile } from "./admin-profile";
import { Theme } from "../directives/theme";

@Component({
    selector: 'component-4',
    template: `
        <ng-container theme="dark">
            <admin-profile />
        </ng-container>
    `,
    imports: [AdminProfile, Theme],
})
export class Component4 {}