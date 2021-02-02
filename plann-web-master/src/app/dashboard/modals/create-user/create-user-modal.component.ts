import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { UsersRegisterFormComponent } from '../../users/register-form/users-register-form.component';
import { ProjectsPermissionComponent } from '../../users/permissions/projects-permission/projects-permission.component';
import { ClientsPermissionComponent } from '../../users/permissions/clients-permission/clients-permission.component';

@Component({
    moduleId: module.id,
    selector: 'plann-create-user-modal',
    templateUrl: './create-user-modal.component.html',
    styleUrls: ['./create-user-modal.component.scss']
})
export class CreateUserModalComponent implements OnInit {

    addUserModalRef: BsModalRef;
    @ViewChild('registerForm') registerForm: UsersRegisterFormComponent;
    @ViewChild('clientsPermissions') clientsPermissions: ClientsPermissionComponent;
    @ViewChild('projectsPermissions') projectsPermissions: ProjectsPermissionComponent;

    constructor() {
    }

    ngOnInit() {
    }

    registerUser() {

        this.registerForm.registerUser();

        // After .then promise when save in database
        this.addUserModalRef.hide();
    }

    cancelRegister() {

        this.addUserModalRef.hide();
    }

}
