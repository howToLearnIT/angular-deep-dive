import { NgModule } from '@angular/core';
import { AdminMenu } from './components';
import { MenuBehavior, SuperMenu } from './components/directives';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services';

@NgModule({
    imports: [ReactiveFormsModule],
    declarations: [AdminMenu, MenuBehavior, SuperMenu],
    exports: [AdminMenu, SuperMenu],
    providers: [UserService],
})
export class AdminModule { }