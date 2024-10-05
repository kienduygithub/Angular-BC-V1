import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'dateTransform' })
export class DateTransformPipe implements PipeTransform {
    transform = (input: Date) => {
        let currYear = input.getUTCFullYear();
        let currMonth = input.getUTCMonth() + 1;
        let currDay = input.getUTCDate();
        return currYear + "-"
            + this.initZero(currMonth) + '-'
            + this.initZero(currDay);
    }

    private initZero = (input: number): string => {
        let response = "";
        if (input < 10) {
            response = "0" + input.toString();
        } else {
            response = input.toString();
        }

        return response;
    }
}