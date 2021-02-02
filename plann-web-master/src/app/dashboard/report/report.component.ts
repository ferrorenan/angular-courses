import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserService } from '../users/user.service';
import { ClientsService } from '../clients/clients.service';
import { ProjectsService } from '../projects/projects.service';
import { User } from '../users/user';
import { Client } from '../clients/client';
import { Project } from '../projects/project';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'plann-report',
    templateUrl: './report.component.html',
    styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {

    reportFilterForm: FormGroup;
    users: User[];
    clients: Client[];
    projects: Project[];

    report = [
        {
            date: moment(),
            tasks: [
                {
                    id: 1,
                    done: true,
                    created_at: moment(),
                    user: 'usuario1',
                    text: 'task1',
                    client: 'cliente1',
                    project: 'projeto1',
                    estimated: moment(),
                    worked: moment(),
                    finish_date: moment.duration().humanize()
                }, {
                    id: 2,
                    done: false,
                    created_at: moment(),
                    user: 'usuario1',
                    text: 'task1',
                    client: 'cliente1',
                    project: 'projeto1',
                    estimated: moment(),
                    worked: moment(),
                    finish_date: moment.duration().humanize()
                }
            ]
        }, {
            date: moment(),
            tasks: [
                {
                    id: 1,
                    done: true,
                    created_at: moment(),
                    user: 'usuario1',
                    text: 'task1',
                    client: 'cliente1',
                    project: 'projeto1',
                    estimated: moment(),
                    worked: moment(),
                    finish_date: moment.duration().humanize()
                }, {
                    id: 2,
                    done: false,
                    created_at: moment(),
                    user: 'usuario1',
                    text: 'task1',
                    client: 'cliente1',
                    project: 'projeto1',
                    estimated: moment(),
                    worked: moment(),
                    finish_date: moment.duration().humanize()
                }
            ]
        }
    ];

    constructor(private _formBuilder: FormBuilder,
                private _usersService: UserService,
                private _clientsService: ClientsService,
                private _projectsService: ProjectsService) {
    }

    async ngOnInit() {

        const controlConfig = {
            user: [],
            client: [],
            projects: [],
            tags: [],
            periodFrom: [moment().format('YYYY-MM-DD')],
            periodTo: [moment().add(1, 'd').format('YYYY-MM-DD')]
        };

        this.reportFilterForm = this._formBuilder.group(controlConfig);

        this.users = this._usersService.getUsers();
        this.projects = await this._projectsService.getProjects();
        this.clients = await this._clientsService.getClients();
    }

    getReport() {

        console.log(this.reportFilterForm.value);
    }

    sendByEmail() {

        // TODO add report service
        console.log('email sent');
    }

    savePdf() {

        // TODO add report service
        console.log('pdf saved');
    }

    printReport() {

        window.print();
    }

    userSelected(user: User) {

        this.setFormControlValue('user', user.text);
    }

    clientSelected(client: Client) {

        this.setFormControlValue('client', client.text);
    }

    projectSelected(project: Project) {

        this.setFormControlValue('project', project.text);
    }

    private setFormControlValue(property, value) {

        this.reportFilterForm.controls[property].setValue(value);
    }

}
