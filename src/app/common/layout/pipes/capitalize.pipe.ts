import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'capitalize' })
export class CapitalizePipe implements PipeTransform {
    transform = (input: string): string => {
        let capitalized = input && input.length > 0
            ? (`${input.charAt(0).toUpperCase() + input.slice(1).toLowerCase()}`)
            : ''
        return capitalized;
    }
}