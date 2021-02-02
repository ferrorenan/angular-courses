import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PasswordService } from '../password.service';

@Component({
    moduleId: module.id,
    selector: 'forgot-form-password',
    templateUrl: './forgot-password-form.component.html',
    styleUrls: ['./forgot-password-form.component.scss']
})
export class ForgotPasswordFormComponent implements OnInit {

    forgotPasswordForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private _passwordService: PasswordService) {
    }

    ngOnInit(): void {

        const controlsConfig = {
            email: ['', Validators.compose([Validators.required, Validators.email])]
        };

        this.forgotPasswordForm = this.formBuilder.group(controlsConfig);
    }

    async recoverPassword() {

        if (this.forgotPasswordForm.invalid) {

            return;
        }

        try {

            await this._passwordService.forgotPassword(this.forgotPasswordForm.value);

            // TODO handle user interaction SUCCESS, probably a message showing the SUCCESS

        } catch (error) {

            // TODO handle user interaction ERROR, probably a message showing the ERROR
        }
    }
}
