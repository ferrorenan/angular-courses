import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Recurrence } from './models/recurrence';
import { RecurrenceType } from './models/recurrence-type';

@Component({
    moduleId: module.id,
    selector: 'plann-task-recurrence',
    templateUrl: './task-recurrence.component.html',
    styleUrls: ['./task-recurrence.component.scss']
})
export class TaskRecurrenceComponent implements OnInit {

    recurrence = new Recurrence();
    recurrenceForm: FormGroup;
    weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

    constructor(private formBuilder: FormBuilder) {
    }

    ngOnInit() {

        const controlsConfig = {
            start: [''],
            end: ['always'],
            repetition: ['']
        };

        this.recurrenceForm = this.formBuilder.group(controlsConfig);
    }

    selectRecurrenceType(type) {

        this.recurrence.selected[0] = new RecurrenceType(type.id, type.text);

        if (type.text === 'Diária') {

            this.recurrence.summary = 'Repetirá todos os dias sem exceção';
            return;
        }

        if (type.text === 'Semanal') {

            this.recurrence.summary = 'Repetirá durante os dias da semana selecionados';
            return;
        }

        if (type.text === 'Mensal') {

            this.recurrence.summary = 'Repetirá todo dia TAL de cada mês';
            return;
        }

        if (type.text === 'Anual') {

            this.recurrence.summary = 'Repetirá todo DIA/MES de cada ano';
            return;
        }

        if (type.text === 'Nenhuma') {

            this.recurrence.clearRecurrence();
        }
    }
}
