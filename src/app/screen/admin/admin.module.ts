import { NgModule } from "@angular/core";
import { AdminBookingCare } from "./admin.screen";
import { BaseLayoutComponent } from "../../common/layout/base/base.layout";
import { AdminRouting } from "./admin-routing";
import { AdminHeaderBaseComponent } from "../../common/layout/base/header/header.component";
import { CommonModule } from "@angular/common";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpLoaderFactory } from "../../main.module";
import { HttpClient } from "@angular/common/http";
import { AdminDashboardScreen } from "./dashboard/dashboard.screen";

@NgModule({
    declarations: [
        AdminBookingCare,
        AdminDashboardScreen
    ],
    providers: [],
    imports: [
        CommonModule,
        AdminRouting,
        BaseLayoutComponent,
        AdminHeaderBaseComponent,
        TranslateModule
    ],
})

export class AdminModule { }