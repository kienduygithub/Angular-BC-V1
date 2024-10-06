import { Component, EventEmitter, Output } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppLayoutModule } from "../../app-layout.module";
import { TranslateModule } from "@ngx-translate/core";
import { AppPipeModule } from "../../app.pipe";

@Component({
    standalone: true,
    selector: 'admin-sidebar-base',
    templateUrl: 'sidebar.component.html',
    styleUrl: 'sidebar.component.scss',
    imports: [
        RouterModule,
        TranslateModule,
        AppLayoutModule,
        AppPipeModule
    ],
    providers: []
})

export class AdminSidebarBaseComponent {
    isOpen: boolean = true;
    @Output() SidebarEvent = new EventEmitter<boolean>();

    OnToggleSidebar = () => {
        this.isOpen = !this.isOpen;
        this.SidebarEvent.emit(this.isOpen);
    }
}