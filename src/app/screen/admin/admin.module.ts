import { NgModule } from "@angular/core";
import { AdminBookingCare } from "./admin.screen";
import { BaseLayoutComponent } from "../../common/layout/base/base.layout";
import { AdminRouting } from "./admin-routing";
import { AdminHeaderBaseComponent } from "../../common/layout/base/header/header.component";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        AdminBookingCare
    ],
    providers: [],
    imports: [
        CommonModule,
        AdminRouting,
        BaseLayoutComponent,
        AdminHeaderBaseComponent
    ],
})

export class AdminModule { }