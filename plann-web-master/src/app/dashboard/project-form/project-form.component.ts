import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ClientModalComponent } from '../clients/client-modal/client-modal.component';
import { ClientsService } from '../clients/clients.service';
import { Client } from '../clients/client';
import { ProjectsService } from '../projects/projects.service';

@Component({
    moduleId: module.id,
    selector: 'plann-project-form',
    templateUrl: './project-form.component.html',
    styleUrls: ['./project-form.component.scss'],
    providers: [BsModalRef]
})
export class ProjectFormComponent implements OnInit {

    addProjectForm: FormGroup;

    projectModalRef: BsModalRef;

    colorPickerConfig = {
        presetColors: ['#64B04B', '#EE4747', '#2A80B9'],
        presetLabel: '',
        position: 'bottom'
    };

    formControlValues;

    @Input() saveButtonText: string;

    @Input() showTitle = true;

    clients: Client[];

    constructor(private _formBuilder: FormBuilder,
                private _addClientModalRef: BsModalRef,
                private _clientsService: ClientsService,
                private _bsModalService: BsModalService,
                private _projectsService: ProjectsService) {
    }

    async ngOnInit() {

        if (!this.saveButtonText) {

            this.saveButtonText = 'Adicionar Projeto';
        }

        const controlsConfig = {
            client: ['', Validators.required],
            name: ['', Validators.required],
            color: ['#EE4747', Validators.required],
            value: [''],
            budget: [''],
            hoursType: ['']
        };

        this.formControlValues = controlsConfig;

        this.addProjectForm = this._formBuilder.group(controlsConfig);

        this.clients = await this._clientsService.getClients();
    }

    async addProject() {

        try {

            if (this.addProjectForm.invalid) {

                return;
            }

            const selectedClient = this.clients.find((client: Client) =>
                this.addProjectForm.value['project'].text === client.text
            );

            await this._projectsService.createProject(selectedClient, this.addProjectForm.value);

            // TODO what we'll do with the success besides close modal?
            // TODO update projects list with the returned project

            this._closeProjectModal();

        } catch (error) {

            // TODO check what to do with login errors and if it's necessary get error.json();
        }
    }

    addClientModal() {

        this._addClientModalRef = this._bsModalService.show(ClientModalComponent, { 'class': 'add-client-modal' });
        this._addClientModalRef.content.addClientModalRef = this._addClientModalRef;
    }

    clientSelected(client) {

        this.setFormControlValue('client', client.text);
    }

    private _closeProjectModal() {

        this.projectModalRef.hide();
    }

    private setFormControlValue(property, value) {

        this.addProjectForm.controls[property].setValue(value);
    }
}
