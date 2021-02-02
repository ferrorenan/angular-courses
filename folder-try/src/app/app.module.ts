import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SegurancaComponent } from './seguranca/seguranca.component';

import { SegurancaModule } from './seguranca/seguranca.module';

@NgModule({
  declarations: [
    AppComponent,
    SegurancaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SegurancaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
