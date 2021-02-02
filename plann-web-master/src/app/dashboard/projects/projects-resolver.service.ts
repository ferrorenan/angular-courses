import { Resolve } from '@angular/router';
import { Project } from './project';
import { Injectable } from '@angular/core';
import { ProjectsService } from './projects.service';

@Injectable()
export class ProjectsResolverService implements Resolve<Project[]> {

    constructor(private _projectsService: ProjectsService) {

    }

    async resolve(): Promise<Project[]> {

        return await this._projectsService.getProjects();
    }
}
