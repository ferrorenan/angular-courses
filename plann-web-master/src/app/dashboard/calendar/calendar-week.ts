import { CalendarDay } from './calendar-day';
import * as moment from 'moment';
import { CalendarWeekRange } from './calendar-week-range';

export class CalendarWeek {

    public days: CalendarDay[];

    constructor(weekRange?: CalendarWeekRange) {

        this.days = [
            new CalendarDay(0, weekRange ? moment(weekRange.firstDay).day(0) : moment().day(0), []),
            new CalendarDay(1, weekRange ? moment(weekRange.firstDay).day(1) : moment().day(1), []),
            new CalendarDay(2, weekRange ? moment(weekRange.firstDay).day(2) : moment().day(2), []),
            new CalendarDay(3, weekRange ? moment(weekRange.firstDay).day(3) : moment().day(3), []),
            new CalendarDay(4, weekRange ? moment(weekRange.firstDay).day(4) : moment().day(4), []),
            new CalendarDay(5, weekRange ? moment(weekRange.firstDay).day(5) : moment().day(5), []),
            new CalendarDay(6, weekRange ? moment(weekRange.firstDay).day(6) : moment().day(6), [])
        ];
    }
}
