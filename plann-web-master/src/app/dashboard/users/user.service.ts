import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { ApiTokenService } from '../../services/api-token.service';
import { RequestConfig } from '../../services/request-config';

@Injectable()
export class UserService {

    private _userUrl = environment.apiUrl + '/me';
    private _user: User;
    private _users: User[] = [
        new User(new Date(), new Date(), 'back', 'm@m', 1, '', true, 'nome1', 40, 'nome1', new Date()),
        new User(new Date(), new Date(), 'back', 'm@m', 2, '', true, 'opa2', 40, 'opa2', new Date()),
        new User(new Date(), new Date(), 'back', 'm@m', 3, '', true, 'teste3', 40, 'teste3', new Date()),
        new User(new Date(), new Date(), 'back', 'm@m', 4, '', true, 'foi4', 40, 'foi4', new Date())
    ];

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    post() {

        console.log('New User was add');
    }

    put() {

        console.log('update user data');
    }

    remove() {

        console.log('remove user');
    }

    async getUser(): Promise<User> {

        if (this._user) {

            return this._user;
        }

        try {

            const requestConfig = new RequestConfig(this._userUrl, null, this._apiTokenService.getUserToken());

            this._user = await this._apiService.get(requestConfig);

            this._user.text = this._user.name; // setting text to use in ngx-select component

            return this._user;

        } catch (error) {

            ApiService.handleError('GOT_USER_ERROR', error);
        }
    }

    setUser(user: User) {

        this._user = user;
    }

    // TODO check if here is the best place
    getUsers() {

        return this._users;
    }
}
