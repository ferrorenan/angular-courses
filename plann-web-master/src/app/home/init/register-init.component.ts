import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'register-init',
    templateUrl: './register-init.component.html',
    styleUrls: ['./register-init.component.scss']
})
export class RegisterInitComponent implements OnInit {

    initialRegisterForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {

        const controlsConfig = {
            name: ['usuario', Validators.required],
            email: ['mixd@mail.com.br', Validators.compose([Validators.required, Validators.email])],
            password: ['123', Validators.required],
            rePassword: ['123', Validators.required]
        };

        this.initialRegisterForm = this.formBuilder.group(controlsConfig);
    }

    doInitialRegister() {

        const formValues = this.initialRegisterForm.value;

        if (this.initialRegisterForm.invalid || (formValues.password !== formValues.rePassword)) {

            return;
        }

        const navigationConfig = {
            relativeTo: this.route
        };

        this.router.navigate(['empresa'], navigationConfig);

        // TODO implement initial register service
        console.log(formValues);
    }
}
