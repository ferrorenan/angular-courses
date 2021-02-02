import { SubTask } from '../task/sub-task/sub-task';
import { CalendarWeek } from './calendar-week';

export class CalendarTasks {

    constructor(public holding: SubTask[],
                public week: CalendarWeek) {

    }
}
