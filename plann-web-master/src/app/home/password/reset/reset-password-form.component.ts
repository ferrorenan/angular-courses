import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'plann-reset-password-form',
    templateUrl: './reset-password-form.component.html',
    styleUrls: ['./reset-password-form.component.scss']
})
export class ResetPasswordFormComponent implements OnInit {

    resetPasswordForm: FormGroup;
    private _resetToken: string;

    constructor(private _formBuilder: FormBuilder,
                private _passwordService: PasswordService,
                private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this._activatedRoute.params.subscribe(params => {

            this._resetToken = params['token'];
        });

        const controlsConfig = {
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            password_confirmation: ['', [Validators.required, Validators.minLength(6)]]
        };

        this.resetPasswordForm = this._formBuilder.group(controlsConfig);
    }

    async resetPassword() {

        if (this.resetPasswordForm.invalid ||
            (this.resetPasswordForm.value['password'] !== this.resetPasswordForm.value['password_confirmation'])) {

            return;
        }

        try {

            await this._passwordService.resetPassword(this.resetPasswordForm.value, this._resetToken);

            // TODO handle user interaction SUCCESS, probably a message showing the SUCCESS

        } catch (error) {

            const errorJsonParsed = error.json();

            if (errorJsonParsed.errors['token']) {

                // TODO handle user interaction ERROR, probably a message showing the ERROR

                console.log('token inválido');
            }
        }
    }
}
