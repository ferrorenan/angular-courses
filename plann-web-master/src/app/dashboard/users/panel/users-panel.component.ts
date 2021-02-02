import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { User } from '../user';
import { PlannModalsService } from '../../helpers/plann-modals.service';

@Component({
    moduleId: module.id,
    selector: 'plann-users-panel',
    templateUrl: './users-panel.component.html',
    styleUrls: ['./users-panel.component.scss']
})
export class UsersPanelComponent implements OnInit {

    filters = {department: false, inactive: false};
    users: User[];
    listTitle: string;

    constructor(private router: Router,
                private _userService: UserService,
                private _plannModalService: PlannModalsService) {
    }

    ngOnInit() {

        this.users = this._userService.getUsers();
    }

    toggleInactiveFilter() {

        if (this.filters.department) {

            this.filters.department = false;
        }

        this.filters.inactive = !this.filters.inactive;
        this.changeListTitle();
    }

    toggleDepartmentFilter() {

        if (this.filters.inactive) {

            this.filters.inactive = false;
        }

        this.filters.department = !this.filters.department;
        this.changeListTitle();
    }

    changeListTitle() {

        if (this.filters.department) {

            this.listTitle = 'filtrando por departamento';
            return;
        }

        this.listTitle = 'usuários desativados';
    }

    openAddUserModal() {

        this._plannModalService.openUserModal();
    }

    goToUserDetail(user: User) {

        this._userService.setUser(user);

        this.router.navigate(['dashboard/usuarios', user.id]);
    }
}
