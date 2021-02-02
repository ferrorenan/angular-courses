import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'plann-task-description',
    templateUrl: './task-description.component.html',
    styleUrls: ['./task-description.component.scss']
})
export class TaskDescriptionComponent implements OnInit {

    editorOptions = {
        placeholderText: 'Adicione uma descrição a tarefa'
    };

    constructor() {
    }

    ngOnInit() {
    }

}
