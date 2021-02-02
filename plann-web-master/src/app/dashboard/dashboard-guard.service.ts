import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { UserService } from './users/user.service';

@Injectable()
export class DashboardGuardService implements CanActivate {

    constructor(private _userService: UserService,
                private _router: Router) {
    }

    async canActivate(): Promise<boolean> {

        try {

            await this._userService.getUser();

            return true;

        } catch (error) {

            this._router.navigate(['login']);
        }
    }
}
