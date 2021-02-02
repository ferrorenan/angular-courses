import { Component, OnInit } from '@angular/core';
import { TaskHistory, History } from './task-histories';

@Component({
    moduleId: module.id,
    selector: 'plann-task-history',
    templateUrl: './task-history.component.html',
    styleUrls: ['./task-history.component.scss']
})
export class TaskHistoryComponent implements OnInit {

    public histories: TaskHistory[];

    constructor() {

    }

    ngOnInit() {

        this.histories = [
            new TaskHistory(
                new Date(),
                [
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>'),
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>'),
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>')
                ]
            ),
            new TaskHistory(
                new Date(),
                [
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>'),
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>'),
                    new History(new Date(), 'FULANO DE TAL alterou TAL COISA de ISSO para AQUILO na tarefa <b>TAREFOSA</b>')
                ]
            )
        ];
    }
}
