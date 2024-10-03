import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
    standalone: false,
    selector: 'dashboard-screen',
    templateUrl: 'dashboard.screen.html',
    styleUrl: 'dashboard.screen.scss',
    providers: []
})

export class AdminDashboardScreen {

    constructor(
        private translate: TranslateService
    ) {
        // translate.setDefaultLang('en');
        // translate.use('en');
    }
}