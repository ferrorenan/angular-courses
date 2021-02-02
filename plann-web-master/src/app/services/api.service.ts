import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';
import { setAuthorizationHeader } from '../helpers/decorators/set-authorization-header-decorator';
import { RequestConfig } from './request-config';

@Injectable()
export class ApiService {

    private _headers = new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    });

    static handleError(errorKey, error) {

        if (!environment.production) {

            console.error(errorKey, error);
        }

        throw error || error.message;
    }

    constructor(private _http: Http) {

    }

    @setAuthorizationHeader()
    async get(requestConfig: RequestConfig) {

        try {

            const response = await this._http
                .get(requestConfig.url, {headers: this._headers})
                .toPromise();

            console.log(response.headers);

            return response.json();

        } catch (error) {

            throw error;
        }
    }

    @setAuthorizationHeader()
    async post(requestConfig: RequestConfig) {

        try {

            const response = await this._http
                .post(requestConfig.url, requestConfig.payload, {headers: this._headers})
                .toPromise();

            return response.json();

        } catch (error) {

            throw error;
        }
    }

    @setAuthorizationHeader()
    update(url: string, payload) {

    }

    @setAuthorizationHeader()
    async remove(requestConfig: RequestConfig) {

        try {

            const response = await this._http
                .delete(requestConfig.url, {headers: this._headers})
                .toPromise();

            return response.json();

        } catch (error) {

            throw error;
        }

    }
}
