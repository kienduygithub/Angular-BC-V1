import { NgModule } from "@angular/core";
import { ClientBookingCare } from "./client.screen";
import { ClientRouting } from "./client-routing";
import { ClientHomeScreen } from "./home/home.screen";

@NgModule({
    declarations: [
        ClientBookingCare,
        ClientHomeScreen
    ],
    providers: [],
    imports: [
        ClientRouting
    ]
})

export class ClientModule { }