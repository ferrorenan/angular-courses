import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'calendarUsersFilter'
})
export class CalendarUsersFilterPipe implements PipeTransform {

    // TODO change users type from any to User

    transform(users: any[], search?: string): any {

        if (!search) {

            return users;
        }

        search.toLocaleLowerCase();

        return users.filter(user => {

            if (user.text.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) === -1) {

                return;
            }

            return user;
        });
    }
}
