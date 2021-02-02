import { Pipe, PipeTransform } from '@angular/core';
import { Task } from '../../../task/task';

@Pipe({
    name: 'taskOverviewTabFilter'
})
export class TaskOverviewTabFilterPipe implements PipeTransform {

    transform(tasks: Task[], taskStatus?: string): Task[] {

        if (!taskStatus) {

            return tasks;
        }

        taskStatus.toLocaleLowerCase();

        return tasks.filter(task => {

            if (task.progressStatus.toLocaleLowerCase() !== taskStatus.toLocaleLowerCase()) {

                return;
            }

            return task;
        });
    }

}
