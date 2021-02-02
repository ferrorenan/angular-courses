import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { PlannModalsService } from '../../helpers/plann-modals.service';
import { ClientsService } from '../../clients/clients.service';
import { Project } from '../project';
import { ProjectsService } from '../projects.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'plann-projects-panel',
    templateUrl: './projects-panel.component.html',
    styleUrls: ['./projects-panel.component.scss']
})
export class ProjectsPanelComponent implements OnInit {

    projects: Project[];
    @ViewChild('projectSearch') projectSearch: ElementRef;
    filters = {overdue: false, done: false};
    orderParam: string;

    constructor(public modalsService: PlannModalsService,
                private _clientsService: ClientsService,
                private _projectsService: ProjectsService,
                private _router: Router,
                private _activatedRoute: ActivatedRoute) {
    }

    ngOnInit() {

        this._activatedRoute.data.subscribe(resolvedData => {

            this.projects = resolvedData.projects;
        });

        if (this._clientsService.getSelected()) {

            this.projectSearch.nativeElement.value = this._clientsService.getSelected().text;
        }
    }

    toggleOverdueFilter() {

        if (this.filters.done) {

            this.filters.done = false;
        }

        this.filters.overdue = !this.filters.overdue;
    }

    toggleDoneFilter() {

        if (this.filters.overdue) {

            this.filters.overdue = false;
        }

        this.filters.done = !this.filters.done;
    }

    setOrderParams(currentOrderField) {

        if (this.orderParam === currentOrderField) {

            return;
        }

        this.orderParam = currentOrderField;

        console.log(currentOrderField);
    }

    goToProjectDetail(project: Project) {

        this._projectsService.selectedProject = project;

        this._router.navigate(['dashboard/projetos', project.id]);
    }
}
