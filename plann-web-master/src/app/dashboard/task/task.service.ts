import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ApiTokenService } from '../../services/api-token.service';
import { environment } from '../../../environments/environment';
import { RequestConfig } from '../../services/request-config';
import { Project } from '../projects/project';
import { User } from '../users/user';

@Injectable()
export class TaskService {

    private _taskUrl = `${environment.apiUrl}/tasks`;

    constructor(private _apiService: ApiService,
                private _apiTokenService: ApiTokenService) {
    }

    async removeTask(taskIds) {

        try {

            const requestConfig = new RequestConfig(
                this._taskUrl,
                {
                    _method: 'DELETE',
                    id: taskIds
                },
                this._apiTokenService.getUserToken());

            return await this._apiService.remove(requestConfig);

        } catch (error) {

            ApiService.handleError('ADD_TASK_ERROR', error);
        }
    }

    async addTask(project: Project, user: User, taskForm) {

        const addTaskBody = {
            project_id: project.id,
            user_id: user.id,
            name: taskForm.value['name'],
            description: '',
            dead_line: '',
            repeat_type: '',
            repeat_day_of_week: '',
            repeat_start_at: '',
            repeat_end_at: ''
        };

        try {

            const requestConfig = new RequestConfig(this._taskUrl, addTaskBody, this._apiTokenService.getUserToken());

            return await this._apiService.post(requestConfig);

        } catch (error) {

            ApiService.handleError('ADD_TASK_ERROR', error);
        }
    }
}
