import { NgModule } from "@angular/core";
import { Admin } from "./components";
import { LocalService } from "../../services/local.service";

@NgModule({
  declarations: [Admin],
  exports: [Admin],
  providers: [LocalService],
})
export class AdminModule { }