import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GestaoFuncionalidadesComponent } from './gestao-funcionalidades/gestao-funcionalidades.component';

const routes: Routes = [
  { path: '', component: GestaoFuncionalidadesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestaoFuncionalidadesRoutingModule { }
