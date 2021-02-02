import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project';

@Pipe({
    name: 'projectsFilter'
})
export class ProjectsFilterPipe implements PipeTransform {

    transform(projects: Project[], searchText?: string) {

        if (!searchText) {

            return projects;
        }

        searchText.toLocaleLowerCase();

        return projects.filter(project => {

            if (project.text.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) === -1) {

                return;
            }

            return project;
        });
    }
}
