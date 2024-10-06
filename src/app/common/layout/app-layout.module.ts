import { ModuleWithProviders, NgModule } from "@angular/core";
import { CapitalizePipe } from "./pipes/capitalize.pipe";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatMenuModule } from "@angular/material/menu";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatNativeDateModule } from "@angular/material/core";
import { DefaultMatCalendarRangeStrategy, MatDatepickerModule, MatRangeDateSelectionModel } from "@angular/material/datepicker";
import { MatTabsModule } from "@angular/material/tabs";
import { NzButtonModule } from "ng-zorro-antd/button";
import { NzIconModule } from "ng-zorro-antd/icon";
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
const ANTD_MODULES = [
    NzButtonModule,
    NzIconModule,
    NzMenuModule,
    NzToolTipModule,
]

const MAT_MODULES = [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatTabsModule
]

@NgModule({
    declarations: [],
    exports: [...MAT_MODULES, ...ANTD_MODULES],
    imports: [

    ]
})

export class AppLayoutModule {
    static forRoot(): ModuleWithProviders<AppLayoutModule> {
        return {
            ngModule: AppLayoutModule,
            providers: [
                MatRangeDateSelectionModel,
                DefaultMatCalendarRangeStrategy
            ]
        }
    }
}