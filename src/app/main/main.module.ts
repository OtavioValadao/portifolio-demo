import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBrazil } from 'ng-brazil';
import { ComponentsModule } from '../components/components.module';
import { BodyComponent } from './body/body.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainRoutingModule } from './main-routing.module';


@NgModule({
  declarations: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    NgbModule,
    NgBrazil,
    BrowserModule,
    FontAwesomeModule,
    ComponentsModule
  ],
  exports: [
    BodyComponent,
    FooterComponent,
    HeaderComponent,
    MainRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MainModule { }
