import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'register-department',
    templateUrl: './register-department.component.html',
    styleUrls: ['./register-department.component.scss']
})
export class RegisterDepartmentComponent implements OnInit {

    departmentRegisterForm: FormGroup;

    constructor(private formBuilder: FormBuilder,
                private router: Router) {
    }

    ngOnInit() {

        const controlsConfig = {
            name: ['back-end', Validators.required],
            job: ['desenvolvedor', Validators.required]
        };

        this.departmentRegisterForm = this.formBuilder.group(controlsConfig);
    }

    doDepartmentRegister() {

        if (this.departmentRegisterForm.invalid) {

            return;
        }

        this.router.navigate(['calendario']);

        // TODO implement company register service
        console.log(this.departmentRegisterForm.value);
    }
}
