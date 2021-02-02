import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Department } from '../../departments/department';
import { DepartmentsService } from '../../departments/departments.service';
import { DepartmentsRegisterFormComponent } from '../../departments/register-form/departments-register-form.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { UserService } from '../user.service';

@Component({
    moduleId: module.id,
    selector: 'plann-user-register-form',
    templateUrl: './users-register-form.component.html',
    styleUrls: ['./users-register-form.component.scss']
})
export class UsersRegisterFormComponent implements OnInit {

    @Input() isRegister = true;
    registerForm: FormGroup;
    departments: Department[];
    private _addDepartmentModalRef: BsModalRef;
    permissions = [
        {id: 1, text: 'Administrador'},
        {id: 2, text: 'Usuario'},
        {id: 3, text: 'Visitante'}
    ];
    timezones = [
        {id: 1, text: 'Brasil'},
        {id: 2, text: 'Paquistão'},
        {id: 3, text: 'Indonésia'}
    ];
    finance = [
        {id: 1, text: 'Pode visualizar'},
        {id: 2, text: 'Pode editar'}
    ];

    constructor(private _formBuilder: FormBuilder,
                private _departmentsService: DepartmentsService,
                private _bsModalService: BsModalService,
                private _usersService: UserService) {
    }

    ngOnInit() {

        this.departments = this._departmentsService.getDepartments();

        const controlsConfig = {
            department: ['', Validators.required],
            dob: [''],
            email: ['', Validators.required],
            finance: ['', Validators.required],
            hireDate: [''],
            job: ['', Validators.required],
            name: ['', Validators.required],
            password: [''],
            permission: ['', Validators.required],
            timezone: ['', Validators.required],
            value: ['', Validators.required]
        };

        this.registerForm = this._formBuilder.group(controlsConfig);
    }

    departmentSelected(department) {

        this.setFormControlValue('department', department.text);
    }

    permissionSelected(permission) {

        this.setFormControlValue('permission', permission.text);
    }

    timezoneSelected(timezone) {

        this.setFormControlValue('timezone', timezone.text);
    }

    financeSelected(finance) {

        this.setFormControlValue('finance', finance.text);
    }

    openAddDepartmentModal() {

        this._addDepartmentModalRef = this._bsModalService.show(DepartmentsRegisterFormComponent,
            {'class': 'add-department-modal'});
        this._addDepartmentModalRef.content.modalRef = this._addDepartmentModalRef;
    }

    registerUser() {

        if (this.registerForm.invalid) {

            return;
        }

        this._usersService.post();
    }

    private setFormControlValue(property, value) {

        this.registerForm.controls[property].setValue(value);
    }
}
