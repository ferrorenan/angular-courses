import { Injectable } from '@angular/core';

@Injectable()
export class ApiTokenService {

    private _userToken = '';

    getUserToken(): string {

        if (this._userToken) {

            return this._userToken;
        }

        return localStorage.getItem( 'plann-token');
    }

    setApiToken(token: string) {

        this._userToken = token;

        localStorage.setItem('plann-token', this._userToken);
    }

    removeUserToken() {

        this._userToken = '';

        localStorage.removeItem('plann-token');
    }
}
