import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'plann-projects-detail',
    templateUrl: './projects-detail.component.html',
    styleUrls: ['./projects-detail.component.scss']
})
export class ProjectsDetailComponent implements OnInit {

    project: Project;

    constructor(private route: ActivatedRoute,
                private projectsService: ProjectsService) {

    }

    ngOnInit() {

        this.route.data.subscribe(resolve => {

            console.log('Got project detail', resolve);
        });

        this.project = this.projectsService.selectedProject;
    }

}
