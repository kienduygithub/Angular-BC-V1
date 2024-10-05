export class LangModel {
    id: number;
    lang: string;
    value: string;

    constructor(
        id?: number,
        lang?: string,
        value?: string
    ) {
        this.id = id ?? 0;
        this.lang = lang ?? 'vi';
        this.value = value ?? 'lang.vi';
    }
}