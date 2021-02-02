import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { DepartmentsService } from '../departments.service';

@Component({
    moduleId: module.id,
    selector: 'app-departments-register-form',
    templateUrl: './departments-register-form.component.html',
    styleUrls: ['./departments-register-form.component.scss']
})
export class DepartmentsRegisterFormComponent implements OnInit {

    registerForm: FormGroup;
    modalRef: BsModalRef;

    constructor(private _formBuilder: FormBuilder,
                private _departmentsService: DepartmentsService) {
    }

    ngOnInit() {

        const controlsConfig = {
            name: ['', Validators.required]
        };

        this.registerForm = this._formBuilder.group(controlsConfig);
    }

    registerDepartment() {

        if (this.registerForm.invalid) {

            return;
        }

        this._departmentsService.addDepartment();

        // after add in database
        this.modalRef.hide();
    }

    cancelRegister() {

        this.modalRef.hide();
    }

}
