import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import * as moment from 'moment';
import { PlannModalsService } from '../helpers/plann-modals.service';
import { DragulaService } from 'ng2-dragula';
import { Client } from '../clients/client';
import { Project } from '../projects/project';
import { User } from '../users/user';
import { UserService } from '../users/user.service';
import { ActivatedRoute } from '@angular/router';
import { CalendarTasks } from './calendar-tasks';
import { SubTaskService } from '../task/sub-task/sub-task.service';
import { CalendarWeekRange } from './calendar-week-range';
import { TaskService } from '../task/task.service';

@Component({
    moduleId: module.id,
    selector: 'dashboard-calendar',
    templateUrl: './calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit, OnDestroy {

    addTaskForm: FormGroup;

    user: User;

    users: User[];

    clients: Client[];

    projects: Project[];

    calendar: CalendarTasks;

    dayClasses = {
        cols: {}
    };

    @ViewChild('clientsSelect') clientsSelect;

    @ViewChild('projectsSelect') projectsSelect;

    week = {
        ofYear: moment().isoWeek(),
        firstDay: moment().day(0),
        lastDay: moment().day(6)
    };

    constructor(public modalsService: PlannModalsService,
                private _formBuilder: FormBuilder,
                private _dragulaService: DragulaService,
                private _subTasksService: SubTaskService,
                private _tasksService: TaskService,
                private _usersService: UserService,
                private _route: ActivatedRoute) {

    }

    async ngOnInit() {

        // Get calendar resolvers
        this._route.data.subscribe(resolvedData => {

            this.calendar = resolvedData.subTasks;
            this.projects = resolvedData.projects;
            this.clients = resolvedData.clients;
            this.users = resolvedData.users;
        });

        // Get dashboard resolvers
        this._route.parent.data.subscribe(resolvedData => {

            this.user = resolvedData.user;
        });

        const controlsConfig = {
            client: ['', Validators.required],
            project: ['', Validators.required],
            name: ['', Validators.required]
        };

        this.addTaskForm = this._formBuilder.group(controlsConfig);

        this.dayClasses.cols = {
            'col-xs-2-4': this.calendar.week.days.length === 5, // get user week config
            'col-xs-2': this.calendar.week.days.length === 6, // get user week config
            'col-xs-1-7': this.calendar.week.days.length === 7 // get user week config
        };

        this._dragulaService.setOptions('tasks', {
            moves: function (element, container, handle) {

                return handle.className.indexOf('resize-bottom-hover') === -1;
            }
        });
    }

    ngOnDestroy(): void {

        this._dragulaService.destroy('tasks');
    }

    async addTask() { // TODO wait Irineu fix add task service

        if (this.addTaskForm.invalid) {

            return;
        }

        const selectedProject = this.projects.find((project: Project) =>
            project.text === this.addTaskForm.value['project']);

        const createdTask = await this._tasksService.addTask(selectedProject, this.user, this.addTaskForm);

        this.calendar.holding.push(createdTask);

        this.clearAddTaskForm();
    }

    increaseWeek() {

        const weekRange = new CalendarWeekRange(
            moment().dayOfYear(this.week.firstDay.dayOfYear() + 7),
            moment().dayOfYear(this.week.lastDay.dayOfYear() + 7));

        this.updateTasks(weekRange);
    }

    decreaseWeek() {

        const weekRange = new CalendarWeekRange(
            moment().dayOfYear(this.week.firstDay.dayOfYear() - 7),
            moment().dayOfYear(this.week.lastDay.dayOfYear() - 7));

        this.updateTasks(weekRange);
    }

    setToday() {

        const weekRange = new CalendarWeekRange(moment().day(0), moment().day(6));

        this.updateTasks(weekRange);
    }

    async updateTasks(range: CalendarWeekRange) {

        this.calendar = await this._subTasksService.getTasks(range);

        this.setCurrentWeek(range);
    }

    clientSelected(client) {

        this.setFormControlValue('client', client.text);
    }

    projectSelected(project) {

        this.setFormControlValue('project', project.text);
    }

    private clearAddTaskForm() {

        this.clientsSelect.remove(this.clientsSelect.activeOption);
        this.projectsSelect.remove(this.projectsSelect.activeOption);
        this.setFormControlValue('name', '');
    }

    private setFormControlValue(property, value) {

        this.addTaskForm.controls[property].setValue(value);
    }

    private setCurrentWeek(weekRange) {

        this.week.firstDay = weekRange.firstDay;
        this.week.lastDay = weekRange.lastDay;
        this.week.ofYear = this.week.firstDay.week();
    }
}
