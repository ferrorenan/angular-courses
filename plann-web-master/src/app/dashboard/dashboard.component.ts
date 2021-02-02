import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from './users/user';
import { ApiTokenService } from '../services/api-token.service';

@Component({
    moduleId: module.id,
    selector: 'plann-dashboard-header',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    user: User;

    constructor(private _route: ActivatedRoute,
                private _router: Router,
                private _apiTokenService: ApiTokenService) {}

    ngOnInit(): void {

        this._route.data.subscribe(resolve => {

            console.log('Got user data', resolve);
        });
    }

    doLogout() {

        this._apiTokenService.removeUserToken();

        this._router.navigate(['../login']);
    }

    goToUserDetails() {

        if (this._router.url.indexOf('\/usuarios\/') > -1) {

            return;
        }

        this._router.navigate(['dashboard/usuarios', this.user.id]);
    }
}
