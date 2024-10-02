import { Component } from "@angular/core";

@Component({
    standalone: false,
    selector: 'admin-booking-care',
    template: `
        <base-layout>
            <router-outlet></router-outlet>
        </base-layout>
    `,
    providers: []
})

export class AdminBookingCare { }