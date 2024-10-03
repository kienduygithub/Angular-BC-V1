import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppConfig } from "../../../config/app.config";

@Component({
    standalone: true,
    selector: 'admin-header-base',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    imports: [
        CommonModule,
        TranslateModule
    ],
    providers: []
})

export class AdminHeaderBaseComponent implements OnInit {

    lang: string;

    constructor(
        private translate: TranslateService,
        private appConfig: AppConfig
    ) {
        this.lang = appConfig.GetLang();
    }

    ngOnInit(): void {
        this.translate.setDefaultLang(this.lang);
    }

    OnSwitchLanguage = (lang: string) => {
        this.translate.setDefaultLang(lang);
        this.appConfig.SetLang(lang);
    }

}