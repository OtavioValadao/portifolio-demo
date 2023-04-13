import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMaisModule } from './saiba-mais.module';
import { SaibaMaisEmpresasComponent } from './saiba-mais-empresas/saiba-mais-empresas.component';


const routes: Routes = [
  {
    path: "",
    component: SaibaMaisEmpresasComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SaibaMaisRoutingModule { }
