import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ClientBookingCare } from "./client.screen";
import { ClientHomeScreen } from "./home/home.screen";

const routes: Routes = [
    {
        path: '',
        component: ClientBookingCare,
        children: [
            {
                path: 'home',
                title: 'Booking Care - Trang chủ',
                component: ClientHomeScreen
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ClientRouting { }