import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CursosComponent} from './cursos/cursos.component';
import {ModuleWithProviders} from '@angular/core';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';

const APP_ROUTES: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cursos', component: CursosComponent
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'cursos/:id', component: CursoDetalheComponent
  },
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
