import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'plann-task-detail',
    templateUrl: './task-detail.component.html',
    styleUrls: ['./task-detail.component.scss']
})
export class TaskDetailComponent implements OnInit {

    task = {
        id: 1,
        subTasks: [
            {
                id: 1,
                status: 'done',
                dueDate: moment(new Date()).add(3),
                estimated: 18000,
                spent: 3600
            },
            {
                id: 2,
                status: 'schedule',
                dueDate: moment(new Date()).add(3),
                estimated: 18000,
                spent: 0
            },
            {
                id: 4,
                status: 'holding',
                dueDate: moment(new Date()).add(3),
                estimated: 10800,
                spent: 0
            }
        ]
    };

    constructor() {

    }

    ngOnInit() {

    }

    countTasksDone() {

        let count = 0;

        this.task.subTasks.forEach(task => {

            if (task.status === 'done') {

                count++;
            }
        });

        return count;
    }

    addSubTask() {

        // TODO create a task type with a standard status value = holding

        this.task.subTasks.push({
            id: this.task.subTasks[this.task.subTasks.length - 1].id++,
            status: 'holding',
            dueDate: moment(new Date()).add(3),
            estimated: 10800,
            spent: 0
        });
    }

    removeSubTask(subTask) { // TODO add sub task type

        // TODO add task service - remove
        const subTaskIndex = this.task.subTasks.indexOf(subTask);
        this.task.subTasks.splice(subTaskIndex, 1);
    }
}
