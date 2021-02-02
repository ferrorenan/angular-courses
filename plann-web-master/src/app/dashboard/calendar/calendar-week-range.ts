import { Moment } from 'moment';

export class CalendarWeekRange {

    constructor(public firstDay: Moment,
                public lastDay: Moment) {
    }
}
