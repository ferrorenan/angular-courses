// Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// App modules
import { AppRoutingModule } from './app-routing.module';

// Third party modules
import { NgxBootstrapModule } from '../ngx-bootstrap/ngx-bootstrap.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './home/login/login.component';
import { HomeModule } from './home/home.module';
import { UsageTermsComponent } from './usage-terms/usage-terms.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ApiService } from './services/api.service';
import { ApiTokenService } from './services/api-token.service';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        NgxBootstrapModule,
        HomeModule,
        DashboardModule,
        HttpModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        NotFoundComponent,
        LoginComponent,
        UsageTermsComponent
    ],
    providers: [ApiService, ApiTokenService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
