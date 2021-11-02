import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AcessoComponent } from './acesso/acesso.component';
import { LoginComponent } from './acesso/login/login.component';
import { ROUTES } from './app-routing.module';
import { AppComponent } from './app.component';
import { Error404Component } from './error404/error404.component';
import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades/gestao-funcionalidades.component';
import { NoticiasComponent } from './gestao-funcionalidades/noticias/noticias.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';
import { RodapeComponent } from './rodape/rodape.component';
import { AutenticacaoGuard } from './services/autenticacao-guard.service';
import { Autenticacao } from './services/autenticacao.service';
import { Bd } from './services/bd.service';
import { ErrorDialogComponent } from './shared/components/error-dialog/error-dialog.component';
import { SharedModule } from './shared/shared.module';
import { TopoComponent } from './topo/topo.component';



@NgModule({
  declarations: [
    AppComponent,
    TopoComponent,
    HomeComponent,
    RodapeComponent,
    Error404Component,
    MainComponent,
    LoginComponent,
    AcessoComponent,
    GestaoFuncionalidadesComponent,
    NoticiasComponent,
    ErrorDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(ROUTES, { relativeLinkResolution: 'legacy' }),
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    SharedModule
  ],
  providers: [Autenticacao, AutenticacaoGuard, Bd],
  bootstrap: [AppComponent]
})
export class AppModule { }
