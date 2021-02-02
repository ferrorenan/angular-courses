import { Component, Input, OnInit } from '@angular/core';
import { ClientsService } from '../../../clients/clients.service';
import { Client } from '../../../clients/client';
import { Project } from '../../../projects/project';
import { ProjectsService } from '../../../projects/projects.service';

@Component({
    moduleId: module.id,
    selector: 'plann-user-projects-permission',
    templateUrl: './projects-permission.component.html',
    styleUrls: ['./projects-permission.component.scss']
})
export class ProjectsPermissionComponent implements OnInit {

    @Input() showSaveButton = false;
    projects: Project[];
    clients: Client[];
    permissions = [
        {id: 1, text: 'Ver e editar'},
        {id: 2, text: 'Ver'},
        {id: 3, text: 'Nenhuma'}
    ];

    constructor(private _clientsService: ClientsService,
                private _projectsService: ProjectsService) {
    }

    async ngOnInit() {

        this.clients = await this._clientsService.getClients();
        this.projects = await this._projectsService.getProjects();
    }

    saveProjectsPermission() {

        console.log('Projects permissions changed');
    }
}
