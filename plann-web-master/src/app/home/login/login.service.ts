import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { LoginResponse } from './login-response';
import { ApiTokenService } from '../../services/api-token.service';
import { RequestConfig } from '../../services/request-config';

@Injectable()
export class LoginService {

    loginUrl = environment.apiUrl + '/login';
    private currentLogin: LoginResponse;

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    async doLogin(credentials): Promise<LoginResponse> {

        try {

            const requestConfig = new RequestConfig(this.loginUrl, credentials);

            const loginResponse: LoginResponse = await this._apiService.post(requestConfig);

            this._apiTokenService.setApiToken(loginResponse.api_token);

            this.currentLogin = loginResponse;

            return loginResponse;

        } catch (error) {

            ApiService.handleError('LOGIN_ERROR', error);
        }
    }

    getLogin(): LoginResponse {

        return this.currentLogin;
    }
}
