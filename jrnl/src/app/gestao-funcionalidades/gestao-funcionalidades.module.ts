import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestaoFuncionalidadesRoutingModule } from './gestao-funcionalidades-routing.module';
import { NoticiasComponent } from './gestao-funcionalidades/noticias/noticias.component';


@NgModule({
  declarations: [NoticiasComponent],
  imports: [
    CommonModule,
    GestaoFuncionalidadesRoutingModule
  ]
})
export class GestaoFuncionalidadesModule { }
