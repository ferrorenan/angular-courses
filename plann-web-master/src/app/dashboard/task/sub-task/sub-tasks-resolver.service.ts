import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SubTaskService } from './sub-task.service';
import { CalendarTasks } from '../../calendar/calendar-tasks';
import * as moment from 'moment';
import { CalendarWeekRange } from '../../calendar/calendar-week-range';

@Injectable()
export class SubTasksResolverService implements Resolve<CalendarTasks> {

    constructor(private _subTaskService: SubTaskService) {
    }

    async resolve() {

        // TODO uncomment to run
        // return await this._subTaskService.getTasks(new CalendarWeekRange(moment().day(0), moment().day(6)));

        // TODO remove to run
        return await this._subTaskService.getTasks(new CalendarWeekRange(moment().day(0), moment().day(6)));
    }
}
