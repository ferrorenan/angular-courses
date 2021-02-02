import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { NotFoundComponent } from './not-found/not-found.component';
import { UsageTermsComponent } from './usage-terms/usage-terms.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'termos-uso',
        component: UsageTermsComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}

// { enableTracing: true } to debug routes
