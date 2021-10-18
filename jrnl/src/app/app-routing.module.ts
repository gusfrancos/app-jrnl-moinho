import { Routes, RouterModule } from '@angular/router';
import { AcessoComponent } from './acesso/acesso.component';
import { Error404Component } from './error404/error404.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { AutenticacaoGuard } from './services/autenticacao-guard.service'

export const ROUTES: Routes = [

  { path: '', pathMatch:'full', component: MainComponent} ,
  { path: 'acesso', component: AcessoComponent },
    { path: '**', component: Error404Component },
  { path: 'home', pathMatch:'full', component: MainComponent }


 ];


