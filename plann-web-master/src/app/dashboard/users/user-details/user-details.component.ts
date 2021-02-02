import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user';
import { FileUploader } from 'ng2-file-upload';
import * as moment from 'moment';

@Component({
    moduleId: module.id,
    selector: 'plann-user-details',
    templateUrl: './user-details.component.html',
    styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {

    user: User;
    uploader = new FileUploader({url: ''});

    // TODO create Day Type
    daysOfWeek = [
        {fullName: 'sunday', nickName: moment().isoWeekday(1).format('ddd'), status: false},
        {fullName: 'monday', nickName: moment().isoWeekday(2).format('ddd'), status: false},
        {fullName: 'tuesday', nickName: moment().isoWeekday(3).format('ddd'), status: false},
        {fullName: 'wednesday', nickName: moment().isoWeekday(4).format('ddd'), status: false},
        {fullName: 'thursday', nickName: moment().isoWeekday(5).format('ddd'), status: false},
        {fullName: 'friday', nickName: moment().isoWeekday(6).format('ddd'), status: false},
        {fullName: 'saturday', nickName: moment().isoWeekday(7).format('ddd'), status: false}
    ];

    constructor(private _usersService: UserService) {
    }

    ngOnInit() {

        // TODO check how to get user IN THE RIGHT WAY
        this.user = new User(new Date(), new Date(), 'back', 'm@m', 1, '', true, 'nome1', 40, 'nome1', new Date());
    }

    changeDayStatus(day) {

        day.status = !day.status;
    }
}
