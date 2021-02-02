import { Moment } from 'moment';
import { Task } from '../task';

export class SubTask {

    constructor(public id: number,
                public task_id: number,
                public task: Task,
                public text: string,
                public name: string,
                public date: Moment,
                public is_concluded: boolean,
                public estimated: number,
                public worked: number,
                public created_at: Moment,
                public updated_at: Moment,
                public deleted_at: Moment) {

    }
}
