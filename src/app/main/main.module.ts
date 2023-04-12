import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgBrazil } from 'ng-brazil';


@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    NgBrazil,
    BrowserModule,
    FontAwesomeModule,
  ],
  exports:[
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    MainRoutingModule
  ]
})
export class MainModule { }
