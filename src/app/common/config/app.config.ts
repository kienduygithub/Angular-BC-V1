import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { of, switchMap } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AppConfig {

    private domain: string = "";
    private lang: string = "";

    constructor(
        private http: HttpClient
    ) { }

    LoadAppConfig = () => {

        let lang = this.GetCache('CurrLang') !== undefined
            ? this.GetCache('CurrLang')
            : "vi";
        this.SetLang(lang);

        this.http.get<any>("assets/config.json").pipe(
            switchMap(response => of(response))
        ).toPromise()
            .then((res: any) => {
                this.SetDomain(res?.domain ?? "");
            })
            .catch((error: any) => {
                console.error("Failed to load App Config: ", error);
            })
    }

    GetDomain = () => {
        return this.domain;
    }

    SetDomain = (domain: string) => {
        this.domain = domain;
    }

    GetLang = () => {
        return this.lang;
    }

    SetLang = (lang: string) => {
        this.lang = lang;
        this.SaveCache('CurrLang', lang);
    }

    SaveCache = (key: string, value: any) => {
        localStorage.setItem(key, JSON.stringify(value));
    }

    GetCache = (key: string) => {
        let cache = localStorage.getItem(key);
        if (cache) {
            return JSON.parse(cache);
        }
        return undefined;
    }

    SaveCacheSession = (key: string, value: any) => {
        sessionStorage.setItem(key, JSON.stringify(value));
    }

    GetCacheSession = (key: string) => {
        let cache = sessionStorage.getItem(key);
        if (cache) {
            return JSON.parse(cache);
        }

        return undefined;
    }

    ClearAppConfig = () => {
        let currLang = this.GetLang;
        localStorage.clear();
        sessionStorage.clear();
        this.SaveCache('CurrLang', currLang);
    }
}