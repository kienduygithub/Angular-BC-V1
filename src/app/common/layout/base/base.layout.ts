import { Component } from "@angular/core";
import { AdminHeaderBaseComponent } from "./header/header.component";
import { AdminSidebarBaseComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: 'base-layout',
    template: `
        <section id="admin-header">
            <admin-header-base></admin-header-base>
        </section>
        <section id="admin-sidebar">
            <admin-sidebar-base></admin-sidebar-base>
        </section>
        <section id="admin-content">
            <ng-content select="router-outlet"></ng-content>
        </section>
    `,
    imports: [
        RouterModule,
        AdminHeaderBaseComponent,
        AdminSidebarBaseComponent
    ],
    providers: []
})

export class BaseLayoutComponent {

    constructor(

    ) {

    }

}