import { Resolve } from '@angular/router';
import { User } from './user';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersResolverService implements Resolve<User[]> {

    constructor(private _userService: UserService) {
    }

    async resolve() {

        return await this._userService.getUsers();
    }
}
