import { Injectable } from '@angular/core';
import { Project } from './project';
import { environment } from '../../../environments/environment';
import { RequestConfig } from '../../services/request-config';
import { ApiService } from '../../services/api.service';
import { ApiTokenService } from '../../services/api-token.service';
import * as moment from 'moment';
import { Client } from '../clients/client';

@Injectable()
export class ProjectsService {

    private _projectsUrl = `${environment.apiUrl}/projects`;

    private _projects: Project[] = [];

    selectedProject: Project;

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    async getProjects(): Promise<Project[]> {

        try {

            const requestConfig = new RequestConfig(this._projectsUrl, null, this._apiTokenService.getUserToken());

            const response = await this._apiService.get(requestConfig);

            response.data.forEach((project: Project) => {

                project.text = project.name;
                project.created_at = project.created_at ? moment(project.created_at) : project.created_at;
                project.updated_at = project.updated_at ? moment(project.updated_at) : project.updated_at;
                project.deleted_at = project.deleted_at ? moment(project.deleted_at) : project.deleted_at;
            });

            return this._projects = response.data;

        } catch (error) {

            ApiService.handleError('GOT_CLIENTS_ERROR', error);
        }
    }

    async createProject(client: Client, projectForm) {

        try {

            const payload = {
                customer_id: client.id,
                name: projectForm['name'],
                color: projectForm['color'],
                value: projectForm['value'],
                budget: projectForm['budget']/*,
                hours_type: 20000.00*/
            };

            const requestConfig = new RequestConfig(this._projectsUrl, payload, this._apiTokenService.getUserToken());

            const response = await this._apiService.post(requestConfig);

        } catch (error) {

        }
    }
}
