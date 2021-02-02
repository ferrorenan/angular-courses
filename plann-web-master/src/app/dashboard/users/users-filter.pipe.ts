import { Pipe, PipeTransform } from '@angular/core';
import { User } from './user';

@Pipe({
    name: 'usersFilter'
})
export class UsersFilterPipe implements PipeTransform {

    transform(users: User[], searchText?: string): User[] {

        if (!searchText) {

            return users;
        }

        searchText.toLocaleLowerCase();

        return users.filter(user => {

            if (user.text.toLocaleLowerCase().indexOf(searchText.toLocaleLowerCase()) === -1) {

                return;
            }

            return user;
        });
    }
}
