import { Routes, RouterModule } from '@angular/router';
import { Error404Component } from './error404/error404.component';
import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades/gestao-funcionalidades.component';
import { MainComponent } from './main/main.component';

export const ROUTES: Routes = [
  
  { path: '', component: MainComponent} ,
  { path: 'gestao', component: GestaoFuncionalidadesComponent },
  { path: '**', component: Error404Component },
  
 ];
 

