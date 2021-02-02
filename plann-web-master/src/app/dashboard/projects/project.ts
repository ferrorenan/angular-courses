import { Moment } from 'moment';

export class Project {

    constructor(public budget: string, // ?????????
                public client: string,
                public color: string,
                public created_at: Moment,
                public daysToFinish: number,
                public deleted_at: Moment,
                public dueDays: number,
                public estimatedTime: Moment,
                public id: number,
                public customer_id: number,
                public lastUpdate: Moment,
                public name: string,
                public status: string,
                public tasksQuantity: number,
                public text: string,
                public updated_at: Moment,
                public value: Moment,
                public workedTime: Moment) {

    }
}
