import { NgModule } from "@angular/core";
import { DateTransformPipe } from "./pipes/date-transform.pipe";
import { CapitalizePipe } from "./pipes/capitalize.pipe";

const PIPES = [
    DateTransformPipe,
    CapitalizePipe,
]

@NgModule({
    declarations: [...PIPES],
    exports: [...PIPES]
})
export class AppPipeModule { }