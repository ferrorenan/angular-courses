import { SubTask } from '../task/sub-task/sub-task';
import { Moment } from 'moment';

export class CalendarDay {

    constructor(public id: number,
                public info: Moment,
                public tasks: SubTask[]) {

    }
}
