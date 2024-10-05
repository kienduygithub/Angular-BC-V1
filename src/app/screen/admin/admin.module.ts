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
import { AdminEmployeesScreen } from "./employees/employees.screen";
import { AppLayoutModule } from "../../common/layout/app-layout.module";

@NgModule({
    declarations: [
        AdminBookingCare,
        AdminDashboardScreen,
        AdminEmployeesScreen
    ],
    providers: [],
    imports: [
        CommonModule,
        AdminRouting,
        BaseLayoutComponent,
        AdminHeaderBaseComponent,
        TranslateModule,
        AppLayoutModule
    ],
})

export class AdminModule { }