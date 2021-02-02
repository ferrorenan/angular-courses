import { Injectable } from '@angular/core';
import { ClientModalComponent } from '../clients/client-modal/client-modal.component';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ProjectFormComponent } from '../project-form/project-form.component';
import { EditModalComponent } from '../task/edit-modal/edit-modal.component';
import { CreateUserModalComponent } from '../modals/create-user/create-user-modal.component';

@Injectable()
export class PlannModalsService {

    private addClientModalRef: BsModalRef;
    private addProjectModalRef: BsModalRef;
    private taskModalRef: BsModalRef;
    private addUserModalRef: BsModalRef;

    constructor(private bsModalService: BsModalService) {

    }

    addClientModal() {

        this.addClientModalRef = this.bsModalService.show(ClientModalComponent, {'class': 'add-client-modal'});
        this.addClientModalRef.content.addClientModalRef = this.addClientModalRef;
    }

    openUserModal() {

        this.addUserModalRef = this.bsModalService.show(CreateUserModalComponent, {'class': 'add-user-modal'});
        this.addUserModalRef.content.addUserModalRef = this.addUserModalRef;
    }

    addProjectModal() {

        this.addProjectModalRef = this.bsModalService.show(ProjectFormComponent, {'class': 'add-project-modal'});
        this.addProjectModalRef.content.projectModalRef = this.addProjectModalRef;
    }

    taskDetailModal() {

        this.taskModalRef = this.bsModalService.show(EditModalComponent, {'class': 'task-modal'});
        this.taskModalRef.content.editModalRef = this.taskModalRef;
    }
}
