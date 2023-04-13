import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimeLineComponent } from './time-line/time-line.component';
import { ModalButtonComponent } from './modal-button/modal-button.component';
import { TituloComponent } from './titulo/titulo.component';
import { CustomIconsComponent } from './custom-icons/custom-icons.component';



@NgModule({
  declarations: [
    TimeLineComponent,
    ModalButtonComponent,
    TituloComponent,
    CustomIconsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    TimeLineComponent,
    ModalButtonComponent,
    TituloComponent,
    CustomIconsComponent,
  ]
})
export class ComponentsModule { }
