import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppConfig } from "../../../config/app.config";
import { AppLayoutModule } from "../../app-layout.module";
import { FormControl, FormsModule } from "@angular/forms";
import { map, Observable, startWith } from "rxjs";

@Component({
    standalone: true,
    selector: 'admin-header-base',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    imports: [
        CommonModule,
        TranslateModule,
        AppLayoutModule
    ],
    providers: []
})

export class AdminHeaderBaseComponent implements OnInit {

    myControl = new FormControl('');
    options: string[] = ['One', 'Two', 'Three'];
    filteredOptions: Observable<string[]>;


    lang: string;

    constructor(
        private translate: TranslateService,
        private appConfig: AppConfig
    ) {
        this.lang = appConfig.GetLang();
        this.filteredOptions = this.myControl.valueChanges.pipe(
            startWith(''),
            map(value => this._filter(value || '')),
        );
    }
    private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();

        return this.options.filter(option => option.toLowerCase().includes(filterValue));
    }

    ngOnInit(): void {
        this.translate.setDefaultLang(this.lang);
    }

    OnSwitchLanguage = (lang: string) => {
        this.translate.setDefaultLang(lang);
        this.appConfig.SetLang(lang);
    }

}