import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminBookingCare } from "./admin.screen";
import { AdminDashboardScreen } from "./dashboard/dashboard.screen";
import { AdminEmployeesScreen } from "./employees/employees.screen";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/admin/dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
        title: 'SGO - Admin',
        component: AdminBookingCare,
        children: [
            {
                path: 'dashboard',
                component: AdminDashboardScreen
            },
            {
                path: 'employees',
                component: AdminEmployeesScreen
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AdminRouting { }