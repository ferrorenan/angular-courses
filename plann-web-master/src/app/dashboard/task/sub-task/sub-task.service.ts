import { Injectable } from '@angular/core';
import { Task } from '../task';
import { environment } from '../../../../environments/environment';
import { ApiService } from '../../../services/api.service';
import { RequestConfig } from '../../../services/request-config';
import { ApiTokenService } from '../../../services/api-token.service';
import * as moment from 'moment';
import { CalendarTasks } from '../../calendar/calendar-tasks';
import { SubTask } from './sub-task';
import { CalendarWeek } from '../../calendar/calendar-week';
import { CalendarWeekRange } from '../../calendar/calendar-week-range';

@Injectable()
export class SubTaskService {

    private _subTaskUrl = environment.apiUrl + '/subtasks';

    private _calendarSubTasks: CalendarTasks;

    private _selectedTask: Task; // ???? check if it stay here or in task.service

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    async getTasks(weekRange?: CalendarWeekRange): Promise<CalendarTasks> {

        try {

            const requestConfig = new RequestConfig(
                weekRange ? this.setDateRangeInSubTaskUrl(weekRange) : this._subTaskUrl,
                null,
                this._apiTokenService.getUserToken()
            );

            const response = await this._apiService.get(requestConfig);

            const holdingTasks: SubTask[] = [];

            const week = new CalendarWeek(weekRange);

            response.data.forEach((task: SubTask) => {

                task.text = task.name;

                if (!task.date) {

                    holdingTasks.push(task);
                    return;
                }

                task.date = moment(task.date);

                if (week.days.some(day =>
                        day.info.format('dddd') === task.date.format('dddd'))) {

                    week.days[task.date.day()].tasks.push(task);
                }
            });

            return this._calendarSubTasks = new CalendarTasks(holdingTasks, week);

        } catch (error) {

            ApiService.handleError('GET_TASK_ERROR', error);
        }
    }

    getSelectedTask(): Task {

        return this._selectedTask;
    }

    setSelectedTask(task: Task) {

        this._selectedTask = task;
    }

    setDateRangeInSubTaskUrl(range) {

        const firstDay = range.firstDay.format('YYYY-MM-DD');
        const lastDay = range.lastDay.format('YYYY-MM-DD');

        return `${this._subTaskUrl}?date_start=${firstDay}&date_end=${lastDay}`;
    }
}
