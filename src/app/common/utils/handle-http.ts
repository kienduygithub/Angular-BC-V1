import { Injectable } from "@angular/core";
import { ErrorModel } from "../model/error.model";

@Injectable({
    providedIn: 'root'
})

export class HandleHttp {

    HandleSuccess = (response: any) => {
        return response;
    }

    HandleException = (error: any) => {
        const response = new ErrorModel(error?.status, error?.message);
        return response;
    }
}