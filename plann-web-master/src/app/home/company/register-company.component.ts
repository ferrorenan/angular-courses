import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'register-company',
    templateUrl: './register-company.component.html',
    styleUrls: ['./register-company.component.scss']
})
export class RegisterCompanyComponent implements OnInit {

    companyRegisterForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router,
                private route: ActivatedRoute) {
    }

    ngOnInit() {

        const controlsConfig = {
            name: ['Mixd', Validators.required],
            country: ['Brasil', Validators.required],
            state: ['Sao paulo', Validators.required],
            city: ['Rio Preto', Validators.required],
            employeesQuantity: ['18', Validators.required]
        };

        this.companyRegisterForm = this.formBuilder.group(controlsConfig);
    }

    doCompanyRegister() {

        if (this.companyRegisterForm.invalid) {

            return;
        }

        const navigationConfig = {
            relativeTo: this.route
        };

        this.router.navigate(['../departamento'], navigationConfig);

        // TODO implement company register service
        console.log(this.companyRegisterForm.value);
    }
}
