import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminBookingCare } from "./admin.screen";
import { AdminDashboardScreen } from "./dashboard/dashboard.screen";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        title: 'Booking Care - Admin',
        component: AdminBookingCare,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboardScreen
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRouting { }