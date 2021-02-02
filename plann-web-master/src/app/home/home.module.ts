import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home.component';
import { RegisterInitComponent } from './init/register-init.component';
import { RegisterCompanyComponent } from './company/register-company.component';
import { RegisterDepartmentComponent } from './department/register-department.component';
import { HomeRoutingModule } from './home-routing-module';
import { PasswordModule } from './password/password.module';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        PasswordModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        RegisterInitComponent,
        RegisterCompanyComponent,
        RegisterDepartmentComponent
    ],
    exports: [
        CommonModule
    ]
})
export class HomeModule {
}
