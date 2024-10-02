import { HTTP_CODE } from "../resource/http-code";

export class ErrorModel {
    code: number;
    message: string;
    body: any;

    constructor(
        code?: number,
        message?: string,
        body?: any
    ) {
        this.code = code ?? HTTP_CODE.UNKNOWN;
        this.message = message ?? 'UNKNOWN';
        this.body = body;
    }
}