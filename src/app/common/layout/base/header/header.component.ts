import { CommonModule } from "@angular/common";
import { Component, EventEmitter, OnInit, Output } from "@angular/core";
import { TranslateModule, TranslateService } from "@ngx-translate/core";
import { AppConfig } from "../../../config/app.config";
import { AppLayoutModule } from "../../app-layout.module";
import { ImageResource } from "../../../resource/image_resource";
import { LangModel } from "../../../model/lang.model";

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
    user_default: string = ImageResource.UserDefaultImage;
    isOpenDropdownNotify: boolean = false;
    isOpenDropdownAccount: boolean = false;
    isOpenDropdownLang: boolean = false;
    lang: string;
    langText: string;
    langs: LangModel[] = [
        { id: 1, lang: 'en', value: 'lang.en' },
        { id: 2, lang: 'vi', value: 'lang.vi' }
    ];
    constructor(
        private translate: TranslateService,
        private appConfig: AppConfig
    ) {
        this.lang = appConfig.GetLang();
        this.langText = this.langs.filter(item => item.lang === this.lang)[0].value;
    }


    ngOnInit(): void {
        this.translate.setDefaultLang(this.lang);
    }

    OnToggleDropdownAccount = () => {
        this.isOpenDropdownAccount = !this.isOpenDropdownAccount;
        this.isOpenDropdownLang = false;
        this.isOpenDropdownNotify = false;
    }

    OnToggleDropdownLang = () => {
        this.isOpenDropdownAccount = false;
        this.isOpenDropdownLang = !this.isOpenDropdownLang;
        this.isOpenDropdownNotify = false;
    }

    OnToggleDropdownNotify = () => {
        this.isOpenDropdownAccount = false;
        this.isOpenDropdownLang = false;
        this.isOpenDropdownNotify = !this.isOpenDropdownNotify;
    }

    OnSwitchLanguage = (lang: string) => {
        this.translate.setDefaultLang(lang);
        this.appConfig.SetLang(lang);
        this.langText = this.langs.filter(item => item.lang === lang)[0].value;
    }

}