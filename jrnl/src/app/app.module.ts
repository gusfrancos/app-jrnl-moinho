import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopoComponent } from './topo/topo.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app-routing.module';
import { Error404Component } from './error404/error404.component';
import { MainComponent } from './main/main.component';
import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades/gestao-funcionalidades.component';

import { LoginComponent } from './acesso/login/login.component';
import { Autenticacao } from './services/autenticacao.service';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';
import { Bd } from "./services/bd.service"
import { AcessoComponent } from './acesso/acesso.component';

@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    Error404Component,
    MainComponent,
    GestaoFuncionalidadesComponent,
    LoginComponent,
    AcessoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [Autenticacao, AutenticacaoGuard, Bd],
  bootstrap: [AppComponent]
})
export class AppModule { }
