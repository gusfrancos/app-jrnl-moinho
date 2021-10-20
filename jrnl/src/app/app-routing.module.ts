import { Routes } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { Error404Component } from './error404/error404.component';
import { MainComponent } from './main/main.component';
import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades/gestao-funcionalidades.component';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';

export const ROUTES: Routes = [

  { path: '', pathMatch:'full', component: MainComponent} ,
  { path: 'home', pathMatch:'full', component: MainComponent },
  { path: 'acesso', component: AcessoComponent },
  { path: 'gestao', component: GestaoFuncionalidadesComponent, canActivate:[AutenticacaoGuard] },
  { path: '**', component: Error404Component },





 ];


