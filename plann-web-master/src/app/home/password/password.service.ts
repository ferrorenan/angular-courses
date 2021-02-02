import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { environment } from '../../../environments/environment';
import { RequestConfig } from '../../services/request-config';

@Injectable()
export class PasswordService {

    private _resetPasswordUrl: string = environment.apiUrl + '/password/reset';
    private _forgotPasswordUrl: string = environment.apiUrl + '/password/email';

    constructor(private _apiService: ApiService) {
    }

    async resetPassword(resetForm, resetToken) {

        try {

            const requestConfig = new RequestConfig(this._resetPasswordUrl, resetForm, resetToken);

            return await this._apiService.post(requestConfig);

        } catch (error) {

            ApiService.handleError('RESET_PASSWORD_ERROR', error);
        }
    }

    async forgotPassword(forgotForm) {

        try {

            const requestConfig = new RequestConfig(this._forgotPasswordUrl, forgotForm);

            return await this._apiService.post(requestConfig);

        } catch (error) {

            ApiService.handleError('FORGOT_PASSWORD_ERROR', error);
        }
    }
}
