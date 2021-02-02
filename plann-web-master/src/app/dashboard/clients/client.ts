import { Moment } from 'moment';

export class Client {

    constructor(public id: number,
                public organization_id: number,
                public name: string,
                public text: string,
                public value: string,
                public created_at: Moment,
                public updated_at: Moment,
                public deleted_at: Moment,
                public overdue: boolean) {

    }
}
