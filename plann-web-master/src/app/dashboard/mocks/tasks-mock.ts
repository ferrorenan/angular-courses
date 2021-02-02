import * as moment from 'moment';

export class TasksMock {

    tasks = [
        {
            name: 'task 3',
            status: 'done',
            estimatedTime: moment.now(),
            elapsedTime: moment.now() + 1,
            estimatedValue: 200.3,
            elapsedValue: 100.5,
            color: 'white'
        },
        {
            name: 'task 2',
            status: 'scheduled',
            estimatedTime: moment.now(),
            elapsedTime: moment.now() + 2,
            estimatedValue: 200.3,
            elapsedValue: 100.5,
            color: 'white'
        },
        {
            name: 'task 3',
            status: 'holding',
            estimatedTime: moment.now(),
            elapsedTime: moment.now() + 3,
            estimatedValue: 200.3,
            elapsedValue: 100.5,
            color: 'white'
        }
    ];
}
