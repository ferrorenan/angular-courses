export class TaskHistory {

    constructor(public day: Date,
                public changes: History[]) {
    }
}

export class History {

    constructor(public time: Date,
                public text: string) {

    }
}
