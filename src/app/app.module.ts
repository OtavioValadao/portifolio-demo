import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgBrazil } from 'ng-brazil';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { MainModule } from './main/main.module';

import { SaibaMaisRoutingModule } from './saiba-mais/saiba-mais.routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgBrazil,
    BrowserModule,
    NgbModule,
    MainModule,
    FontAwesomeModule,
    ComponentsModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
