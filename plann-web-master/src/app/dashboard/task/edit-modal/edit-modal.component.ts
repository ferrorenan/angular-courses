import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BsModalRef } from 'ngx-bootstrap';
import { ClientsService } from '../../clients/clients.service';
import { Client } from '../../clients/client';
import { ProjectsService } from '../../projects/projects.service';
import { Project } from '../../projects/project';
import { SubTaskService } from '../sub-task/sub-task.service';
import { Task } from '../task';

@Component({
    moduleId: module.id,
    selector: 'plann-edit-modal',
    templateUrl: './edit-modal.component.html',
    styleUrls: ['./edit-modal.component.scss']
})
export class EditModalComponent implements OnInit {

    task: Task;

    editModalRef: BsModalRef;

    taskEditForm: FormGroup;

    users = [
        { id: 1, text: 'Abestado', department: 'dev' },
        { id: 2, text: 'Bao', department: 'reception' },
        { id: 3, text: 'Cachorro', department: 'out' },
        { id: 4, text: 'Doidao', department: 'back' },
        { id: 5, text: 'Eita', department: 'design' }
    ];

    clients: Client[];

    projects: Project[];

    constructor(private formBuilder: FormBuilder,
                private clientsService: ClientsService,
                private projectsService: ProjectsService,
                private _tasksService: SubTaskService) {

    }

    async ngOnInit() {

        this.task = this._tasksService.getSelectedTask();

        const formControls = {
            taskTitle: ['', Validators.required],
            dueDate: ['', Validators.required],
            spentTime: ['', Validators.required],
            client: ['', Validators.required],
            project: ['', Validators.required],
            user: ['', Validators.required],
            tags: ['']
        };

        this.taskEditForm = this.formBuilder.group(formControls);

        this.clients = await this.clientsService.getClients();
        this.projects = await this.projectsService.getProjects();
    }

    saveTaskEdition() {

        if (this.taskEditForm.invalid) {

            return;
        }

        // TODO create and call task service
        console.log('task edited successfully', this.taskEditForm.value);
    }

    clientSelected(client) {

        this.setFormControlValue('client', client.text);
    }

    projectSelected(project) {

        this.setFormControlValue('project', project.text);
    }

    userSelected(user) {

        this.setFormControlValue('user', user.text);
    }

    private setFormControlValue(property, value) {

        this.taskEditForm.controls[property].setValue(value);
    }
}
