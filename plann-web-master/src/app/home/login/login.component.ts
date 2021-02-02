import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from './login.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    providers: [LoginService]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private _loginService: LoginService) {
    }

    ngOnInit() {

        const controlsConfig = {
            email: ['irineu@mixd.com.br', [Validators.required, Validators.email]],
            password: ['secret', Validators.required]
        };

        this.loginForm = this.formBuilder.group(controlsConfig);
    }

    async doLogin() {

        if (this.loginForm.invalid) {

            return;
        }

        try {

            await this._loginService.doLogin(this.loginForm.value);

            this.router.navigate(['dashboard/calendario']);

        } catch (error) {

            // TODO check what to do with login errors and if it's necessary get error.json();
        }
    }
}
