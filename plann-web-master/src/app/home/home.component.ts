import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    encapsulation: ViewEncapsulation.Emulated
})
export class HomeComponent implements OnInit {

    showRegisterButton = false;

    constructor(private router: Router) {

        this.router.events.subscribe(routeEvent => {

            if (!(routeEvent instanceof NavigationEnd)) {

                return;
            }

            const currentUrl = routeEvent.urlAfterRedirects;

            if (currentUrl.indexOf('login') > -1 || currentUrl.indexOf('senha/') > -1) {

                this.showRegisterButton = true;
                return;
            }

            this.showRegisterButton = false;
        });
    }

    ngOnInit() {
    }

}
