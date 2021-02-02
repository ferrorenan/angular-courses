import { Injectable } from '@angular/core';
import { Department } from './department';

@Injectable()
export class DepartmentsService {

    private _departments = [
        new Department(1, 'backend'),
        new Department(2, 'frontend'),
        new Department(3, 'financeiro'),
        new Department(4, 'design')
    ];

    constructor() {
    }

    getDepartments(): Department[] {

        return this._departments;
    }

    // TODO add department type
    addDepartment(): void {

        console.log('New department was add');
        // this._departments.push(department);
    }

}
