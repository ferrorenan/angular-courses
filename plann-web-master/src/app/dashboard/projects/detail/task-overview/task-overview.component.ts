import { Component, Input, OnInit } from '@angular/core';
import { SubTaskService } from '../../../task/sub-task/sub-task.service';
import { Task } from '../../../task/task';
import { Project } from '../../project';
import { ProjectsService } from '../../projects.service';
import { PlannModalsService } from '../../../helpers/plann-modals.service';

@Component({
    moduleId: module.id,
    selector: 'plann-task-overview',
    templateUrl: './task-overview.component.html',
    styleUrls: ['./task-overview.component.scss']
})
export class TaskOverviewComponent implements OnInit {

    project: Project;
    @Input() taskStatus: string;
    tasks = [];

    // TODO check how to update the task list when switch between tabs

    constructor(public taskService: SubTaskService,
                private _projectService: ProjectsService,
                public plannModalsService: PlannModalsService) {
    }

    async ngOnInit() {

        // this.tasks = await this.taskService.getTasks();
        this.project = this._projectService.selectedProject;
    }

    countTasksDone() {

        let count = 0;

        this.tasks.forEach(task => {

            if (!this.taskStatus) {

                count++;
            }

            if (task.status === this.taskStatus && task.isDone) {

                count++;
            }
        });

        return count;
    }
}
