import { Component } from "@angular/core";
import { AdminHeaderBaseComponent } from "./header/header.component";
import { AdminSidebarBaseComponent } from "./sidebar/sidebar.component";
import { RouterModule } from "@angular/router";

@Component({
    standalone: true,
    selector: 'base-layout',
    template: `
        <div class="admin-layout">
            <section id="admin-sidebar" class="{{isOpenSidebar ? '' : 'compacted'}}">
                <admin-sidebar-base
                    (SidebarEvent)="OnToggleSidebar($event)"
                ></admin-sidebar-base>
            </section>
            <section id="admin-header">
                <admin-header-base></admin-header-base>
                <div class="admin-content">
                    <ng-content select="router-outlet"></ng-content>
                </div>
            </section>
        </div>
    `,
    styles: [`
        .admin-layout {
            width: 100vw;
            max-width: 100vw;
            height: 100vh;
            max-height: 100vh;
            box-sizing: border-box
        }

        #admin-header{
            position: relative;
            top: 0;
            left: 260px;
            width: calc(100% - 260px);
            transition: all 0.3s linear;
        }

        #admin-header .admin-content{
            padding: 10px 20px 20px 20px;
            width: calc(100vw - 260px);
            max-width: calc(100vw - 260px);
            height: calc(100vh - 80px);
            max-height: calc(100vh - 80px);
            box-sizing: border-box;
            background-color: #eee;
            overflow: auto;
            transition: all 0.3s linear;
        }

        #admin-sidebar{
            position: fixed;
            top: 0;
            left: 0;
            height: 100vh;
            max-height: 100vh;
            width: 260px;
            background-color: #F9F9F9;
            overflow-x: hidden;
            white-space: nowrap;
            transition: all 0.3s linear;
        }

        #admin-sidebar.compacted{
            width: 60px;
        }

        #admin-sidebar.compacted+#admin-header{
            width: calc(100% - 60px);
            left: 60px;
        }

        #admin-sidebar.compacted+#admin-header .admin-content{
            width: calc(100vw - 60px);
            max-width: calc(100vw - 60px);
        }
    `],
    imports: [
        RouterModule,
        AdminHeaderBaseComponent,
        AdminSidebarBaseComponent
    ],
    providers: []
})

export class BaseLayoutComponent {

    isOpenSidebar: boolean = true;

    constructor(

    ) {

    }

    OnToggleSidebar = (isOpen: boolean) => {
        this.isOpenSidebar = isOpen;
    }

}