import { NgModule } from '@angular/core';
import { ForgotPasswordFormComponent } from './forgot/forgot-password-form.component';
import { ResetPasswordFormComponent } from './reset/reset-password-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PasswordService } from './password.service';
import { ResetPasswordGuardService } from './reset/reset-password-guard.service';

@NgModule({
    imports: [
        ReactiveFormsModule
    ],
    declarations: [
        ForgotPasswordFormComponent,
        ResetPasswordFormComponent
    ],
    providers: [
        PasswordService,
        ResetPasswordGuardService
    ]
})
export class PasswordModule {
}
