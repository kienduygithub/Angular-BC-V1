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
import { DateTransformPipe } from "./pipes/date-transform.pipe";
import { MatTabsModule } from "@angular/material/tabs";

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

const PIPES = [
    CapitalizePipe,
    DateTransformPipe
]

@NgModule({
    declarations: [...PIPES],
    exports: [...PIPES, ...MAT_MODULES],
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