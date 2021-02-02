import { Moment } from 'moment';
import { Project } from '../projects/project';

export class Task {

    constructor(public checklist = [], // TODO create a checklist type
                public created_at: Moment,
                public date: Moment,
                public dead_line: Moment,
                public deleted_at: Moment,
                public description: string,
                public dueDate: Moment,
                public estimated: number,
                public id: number,
                public isDone: boolean,
                public name: string,
                public progress: number,
                public progressStatus: string,
                public project: Project,
                public task_id: number,
                public text: string,
                public updated_at: Moment,
                public user_id: number,
                public worked: number,
                public repeat_day_of_week: null,
                public repeat_end_at: null,
                public repeat_start_at: null,
                public repeat_type: null,
                public tags: null) {

    }
}
