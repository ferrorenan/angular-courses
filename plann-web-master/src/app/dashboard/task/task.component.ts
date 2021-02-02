import { Component, Input, OnInit } from '@angular/core';
import { PlannModalsService } from '../helpers/plann-modals.service';
import { ResizeEvent } from 'angular-resizable-element';
import { SubTaskService } from './sub-task/sub-task.service';
import { SubTask } from './sub-task/sub-task';
import chroma from 'chroma-js';

@Component({
    moduleId: module.id,
    selector: 'plann-task',
    templateUrl: './task.component.html',
    styleUrls: ['./task.component.scss']
})

export class PlannTaskComponent implements OnInit {

    @Input() subTask: SubTask;

    @Input() isHoldingTask: boolean;

    showDetails = false;

    style = {
        task: {
            height: '60px',
            'border-color': ''
        },
        estimatedBox: {
            height: '',
            isBigger: true,
            background: ''
        },
        workedBox: {
            height: '',
            isBigger: false,
            background: ''
        },
        modalLine: {
            'border-bottom': ''
        }
    };

    resizableConfig = {
        edges: { bottom: true },
        ghostResize: true,
        snapGrid: { bottom: 10 }
    };

    constructor(private modalsService: PlannModalsService,
                private _tasksService: SubTaskService) {
    }

    ngOnInit() {

        const subTaskColor = this.subTask.task.project.color;

        this.style.task['border-color'] = subTaskColor;
        this.style.estimatedBox.background = subTaskColor;
        this.style.workedBox.background = `url(./assets/calendar-background-task-done.png) ${subTaskColor}`;
        this.style.modalLine['border-bottom'] = `1px solid ${chroma(subTaskColor).darken(0.7)}`;
    }

    openTaskEditButtons() {

        this.showDetails = true;
    }

    closeTaskEditButtons() {

        this.showDetails = false;
    }

    estimatedBoxOnResizeEnd(event: ResizeEvent): void {

        const boxHeight = event.rectangle.height;

        this.style.estimatedBox.height = `${boxHeight}px`;

        if (this.style.estimatedBox.height > this.style.workedBox.height) {

            this.style.task.height = this.style.estimatedBox.height;
            this.style.workedBox.isBigger = false;
            this.style.estimatedBox.isBigger = true;
        }
    }

    workedBoxOnResizeEnd(event: ResizeEvent): void {

        const boxHeight = event.rectangle.height;

        this.style.workedBox.height = `${boxHeight}px`;

        if (this.style.workedBox.height > this.style.estimatedBox.height) {

            this.style.task.height = this.style.workedBox.height;
            this.style.estimatedBox.isBigger = false;
            this.style.workedBox.isBigger = true;
        }
    }

    validate(event: ResizeEvent): boolean {

        const minHeightPx = 80;

        if (event.rectangle.height > minHeightPx) {

            return true;
        }
    }

    openTaskDetailModal() {

        this.closeTaskEditButtons();

        this._tasksService.setSelectedTask(this.subTask.task);
        this.modalsService.taskDetailModal();
    }

    removeTask() {

        console.log('task removed');
    }

    moveToNextWeek() {

        console.log('task moved to next week');
    }

    divideTask() {

        console.log('task divided');
    }
}
