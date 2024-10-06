import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HandleHttp } from "../utils/handle-http";
import { map } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class CoreService {

    constructor(
        private http: HttpClient,
        private handleHttp: HandleHttp
    ) {

    }

    private GetDefaultOptions = (url: string): any => {
        const nonePathRequest = ['/sign-in', '/sign-up', '/sign-out'];

        if (nonePathRequest.includes(url))
            return {};

        let token = localStorage.getItem('token');

        if (!token)
            return {};

        let parsed = JSON.parse(token);

        return {
            headers: {
                'token': `Bearer ${parsed}`
            }
        }
    }

    GET = async (DOMAIN: string, URL: string, OPTIONS?: any): Promise<any> => {
        try {
            const DEFAULT_OPTIONS = this.GetDefaultOptions(URL);
            const response = await this.http
                .get<any>(`${DOMAIN}/${URL}`, { ...DEFAULT_OPTIONS, ...OPTIONS })
                .pipe(
                    map(resp => resp)
                )
                .toPromise();
            return this.handleHttp.HandleSuccess(response);
        } catch (error) {
            throw this.handleHttp.HandleException(error);
        }
    }

    POST = async (DOMAIN: string, URL: string, DATA: any, OPTIONS?: any): Promise<any> => {
        try {
            const DEFAULT_OPTIONS = this.GetDefaultOptions(URL);
            const response = await this.http
                .post<any>(`${DOMAIN}/${URL}`, DATA, { ...DEFAULT_OPTIONS, ...OPTIONS })
                .pipe(
                    map(resp => resp)
                )
                .toPromise();
            return this.handleHttp.HandleSuccess(response);
        } catch (error) {
            throw this.handleHttp.HandleException(error);
        }
    }

    PUT = async (DOMAIN: string, URL: string, DATA: any, OPTIONS?: any): Promise<any> => {
        try {
            const DEFAULT_OPTIONS = this.GetDefaultOptions(URL);
            const response = await this.http
                .put<any>(`${DOMAIN}/${URL}`, DATA, { ...DEFAULT_OPTIONS, ...OPTIONS })
                .pipe(
                    map(resp => resp)
                )
                .toPromise();
            return this.handleHttp.HandleSuccess(response);
        } catch (error) {
            throw this.handleHttp.HandleException(error);
        }
    }

    DELETE = async (DOMAIN: string, URL: string, OPTIONS?: any): Promise<any> => {
        try {
            const DEFAULT_OPTIONS = this.GetDefaultOptions(URL);
            const response = await this.http
                .delete<any>(`${DOMAIN}/${URL}`, { ...DEFAULT_OPTIONS, ...OPTIONS })
                .pipe(
                    map(resp => resp)
                )
                .toPromise();
            return this.handleHttp.HandleSuccess(response);
        } catch (error) {
            throw this.handleHttp.HandleException(error);
        }
    }

    PATCH = async (DOMAIN: string, URL: string, DATA: any, OPTIONS?: any): Promise<any> => {
        try {
            const DEFAULT_OPTIONS = this.GetDefaultOptions(URL);
            const response = await this.http
                .patch(`${DOMAIN}/${URL}`, DATA, { ...DEFAULT_OPTIONS, ...OPTIONS })
                .pipe(
                    map(resp => resp)
                )
                .toPromise();
            return this.handleHttp.HandleSuccess(response);
        } catch (error) {
            throw this.handleHttp.HandleException(error);
        }
    }
}