import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { RegisterInitComponent } from './init/register-init.component';
import { RegisterCompanyComponent } from './company/register-company.component';
import { RegisterDepartmentComponent } from './department/register-department.component';
import { ResetPasswordGuardService } from './password/reset/reset-password-guard.service';
import { ResetPasswordFormComponent } from './password/reset/reset-password-form.component';
import { ForgotPasswordFormComponent } from './password/forgot/forgot-password-form.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        children: [
            {
                path: '',
                redirectTo: 'login',
                pathMatch: 'full'
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: 'cadastro',
                children: [
                    {
                        path: '',
                        component: RegisterInitComponent
                    },
                    {
                        path: 'empresa',
                        component: RegisterCompanyComponent
                    },
                    {
                        path: 'departamento',
                        component: RegisterDepartmentComponent
                    }
                ]
            },
            {
                path: 'senha',
                children: [
                    {
                        path: 'recuperar',
                        component: ForgotPasswordFormComponent
                    },
                    {
                        path: 'resetar/:token',
                        canActivate: [
                            ResetPasswordGuardService
                        ],
                        component: ResetPasswordFormComponent
                    }
                ]
            }
        ]
    },
    {
        path: 'login',
        redirectTo: 'home/login',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {

}
