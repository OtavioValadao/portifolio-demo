import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line/time-line.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { TituloComponent } from './titulo/titulo.component';



@NgModule({
  declarations: [
    TimeLineComponent,
    ModalButtonComponent,
    TituloComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TimeLineComponent,
    ModalButtonComponent,
    TituloComponent,
  ]
})
export class ComponentsModule { }
