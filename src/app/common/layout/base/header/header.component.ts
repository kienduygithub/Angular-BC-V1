import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";

@Component({
    standalone: true,
    selector: 'admin-header-base',
    templateUrl: 'header.component.html',
    styleUrl: 'header.component.scss',
    imports: [
        CommonModule
    ],
    providers: []
})

export class AdminHeaderBaseComponent { }