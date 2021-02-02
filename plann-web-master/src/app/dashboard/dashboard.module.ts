import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SelectModule } from 'ng2-select';
import { DragulaModule } from 'ng2-dragula';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { MomentModule } from 'angular2-moment';
import { ColorPickerModule } from 'ngx-color-picker';
import { NgxBootstrapModule } from '../../ngx-bootstrap/ngx-bootstrap.module';
import { ResizableModule } from 'angular-resizable-element';
import { FileUploadModule } from 'ng2-file-upload';

import { DashboardGuardService } from './dashboard-guard.service';
import { SubTasksResolverService } from './task/sub-task/sub-tasks-resolver.service';
import { ClientsService } from './clients/clients.service';
import { ProjectsService } from './projects/projects.service';
import { UserService } from './users/user.service';
import { SubTaskService } from './task/sub-task/sub-task.service';
import { PlannModalsService } from './helpers/plann-modals.service';

import { CalendarComponent } from './calendar/calendar.component';
import { DashboardComponent } from './dashboard.component';
import { PlannTaskComponent } from './task/task.component';
import { EditModalComponent } from './task/edit-modal/edit-modal.component';
import { TaskDetailComponent } from './task/edit-modal/detail/task-detail.component';
import { TaskDescriptionComponent } from './task/edit-modal/description/task-description.component';
import { TaskChecklistComponent } from './task/edit-modal/checklist/task-checklist.component';
import { TaskRecurrenceComponent } from './task/edit-modal/recurrence/task-recurrence.component';
import { TaskHistoryComponent } from './task/edit-modal/history/task-history.component';
import { ClientModalComponent } from './clients/client-modal/client-modal.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ClientsPanelComponent } from './clients/panel/clients-panel.component';

import { CalendarUsersFilterPipe } from './calendar/calendar-users-filter.pipe';
import { ClientsFilterPipe } from './clients/clients-filter.pipe';
import { UsersFilterPipe } from './users/users-filter.pipe';
import { ProjectsFilterPipe } from './projects/projects-filter.pipe';
import { ProjectsPanelComponent } from './projects/panel/projects-panel.component';
import { ProjectsDetailComponent } from './projects/detail/projects-detail.component';
import { TaskOverviewComponent } from './projects/detail/task-overview/task-overview.component';
import { TaskOverviewTabFilterPipe } from './projects/detail/task-overview/task-overview-tab-filter.pipe';
import { UsersPanelComponent } from './users/panel/users-panel.component';
import { UsersRegisterFormComponent } from './users/register-form/users-register-form.component';
import { DepartmentsRegisterFormComponent } from './departments/register-form/departments-register-form.component';
import { CreateUserModalComponent } from './modals/create-user/create-user-modal.component';
import { DepartmentsService } from './departments/departments.service';
import { ProjectsPermissionComponent } from './users/permissions/projects-permission/projects-permission.component';
import { ClientsPermissionComponent } from './users/permissions/clients-permission/clients-permission.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import { ReportComponent } from './report/report.component';
import { UserResolverService } from './users/user-resolver.service';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { ClientsResolverService } from './clients/clients-resolver.service';
import { ProjectsResolverService } from './projects/projects-resolver.service';
import { TaskService } from './task/task.service';
import { UsersResolverService } from './users/users-resolver.service';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        FroalaEditorModule.forRoot(),
        FroalaViewModule.forRoot(),
        NgxBootstrapModule,
        ReactiveFormsModule,
        RouterModule,
        DragulaModule,
        SelectModule,
        MomentModule,
        ColorPickerModule,
        ResizableModule,
        FileUploadModule,
        DashboardRoutingModule
    ],
    declarations: [
        DashboardComponent,
        CalendarComponent,
        PlannTaskComponent,
        EditModalComponent,
        ClientModalComponent,
        CalendarUsersFilterPipe,
        TaskDetailComponent,
        TaskDescriptionComponent,
        TaskChecklistComponent,
        TaskRecurrenceComponent,
        TaskHistoryComponent,
        ProjectFormComponent,
        ClientsPanelComponent,
        ClientsFilterPipe,
        ProjectsFilterPipe,
        TaskOverviewTabFilterPipe,
        UsersFilterPipe,
        ProjectsPanelComponent,
        ProjectsDetailComponent,
        TaskOverviewComponent,
        UsersPanelComponent,
        UsersRegisterFormComponent,
        DepartmentsRegisterFormComponent,
        CreateUserModalComponent,
        ProjectsPermissionComponent,
        ClientsPermissionComponent,
        UserDetailsComponent,
        ReportComponent
    ],
    entryComponents: [
        ProjectFormComponent,
        EditModalComponent,
        ClientModalComponent,
        CreateUserModalComponent,
        DepartmentsRegisterFormComponent
    ],
    providers: [
        PlannModalsService,
        DashboardGuardService,
        SubTasksResolverService,
        ClientsService,
        ProjectsService,
        UserService,
        UserResolverService,
        UsersResolverService,
        SubTaskService,
        TaskService,
        DepartmentsService,
        ClientsResolverService,
        ProjectsResolverService
    ]
})
export class DashboardModule {
}
