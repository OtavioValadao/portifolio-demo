import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaibaMaisEmpresasComponent } from './saiba-mais-empresas/saiba-mais-empresas.component';
import { SaibaMaisRoutingModule } from './saiba-mais.routing.module';



@NgModule({
  declarations: [
    SaibaMaisEmpresasComponent
  ],
  imports: [
    CommonModule,
    SaibaMaisRoutingModule,
  ],
  exports:[]
})
export class SaibaMaisModule { }
