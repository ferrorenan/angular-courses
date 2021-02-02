export class User {

    constructor(public created_at: Date,
                public deleted_at: Date | null,
                public department: string, // TODO implement in API
                public email: string,
                public id: number,
                public image: string, // TODO implement in API
                public is_active: boolean,
                public name: string, // TODO check if it will remain to use in ngx-select (API)
                public organization_id: number,
                public text: string,
                public updated_at: Date) {

    }
}
