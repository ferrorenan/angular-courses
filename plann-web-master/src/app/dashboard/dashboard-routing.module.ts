import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { DashboardGuardService } from './dashboard-guard.service';
import { UserResolverService } from './users/user-resolver.service';
import { ProjectsService } from './projects/projects.service';
import { CalendarComponent } from './calendar/calendar.component';
import { ClientsPanelComponent } from './clients/panel/clients-panel.component';
import { ProjectsPanelComponent } from './projects/panel/projects-panel.component';
import { ProjectsDetailComponent } from './projects/detail/projects-detail.component';
import { UsersPanelComponent } from './users/panel/users-panel.component';
import { UserService } from './users/user.service';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ReportComponent } from './report/report.component';
import { SubTasksResolverService } from './task/sub-task/sub-tasks-resolver.service';
import { ClientsResolverService } from './clients/clients-resolver.service';
import { ProjectsResolverService } from './projects/projects-resolver.service';
import { UsersResolverService } from './users/users-resolver.service';

const routes: Routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [DashboardGuardService],
        resolve: {
            user: UserResolverService
        },
        children: [
            {
                path: '',
                redirectTo: 'calendario',
                pathMatch: 'full'
            },
            {
                path: 'calendario',
                resolve: {
                    clients: ClientsResolverService,
                    projects: ProjectsResolverService,
                    subTasks: SubTasksResolverService,
                    users: UsersResolverService
                },
                component: CalendarComponent
            },
            {
                path: 'clientes',
                component: ClientsPanelComponent
            },
            {
                path: 'projetos',
                resolve: {
                    projects: ProjectsResolverService
                },
                component: ProjectsPanelComponent,
                pathMatch: 'full'
            },
            {
                path: 'projetos/:id',
                pathMatch: 'full',
                resolve: {
                    project: ProjectsService
                },
                component: ProjectsDetailComponent
            },
            {
                path: 'usuarios',
                pathMatch: 'full',
                component: UsersPanelComponent
            },
            {
                path: 'usuarios/:id',
                resolve: {
                    user: UserService
                },
                pathMatch: 'full',
                component: UserDetailsComponent
            },
            {
                path: 'relatorios',
                pathMatch: 'full',
                component: ReportComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {

}
