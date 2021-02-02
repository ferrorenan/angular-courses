import { RecurrenceType } from './recurrence-type';

export class Recurrence {

    types = [
        new RecurrenceType(1, 'Nenhuma'),
        new RecurrenceType(2, 'Diária'),
        new RecurrenceType(3, 'Semanal'),
        new RecurrenceType(4, 'Mensal'),
        new RecurrenceType(5, 'Anual')
    ];
    summary = 'Não há recorrência';
    selected: RecurrenceType[] = [];

    constructor() {

        this.selected[0] = this.types[0];
    }

    clearRecurrence() {

        this.summary = 'Não haverá recorrência';
        this.selected[0] = this.types[0];
    }
}
