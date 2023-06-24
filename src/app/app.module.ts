import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMCAdultosComponent } from './components/imc-adultos/imc-adultos.component';
import { IMCInfantilComponent } from './components/imc-infantil/imc-infantil.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes angular material
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PesoIdealComponent } from './components/peso-ideal/peso-ideal.component';
@NgModule({
  declarations: [
    AppComponent,
    IMCAdultosComponent,
    IMCInfantilComponent,
    HomeComponent,
    PesoIdealComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, 
    MatIconModule , 
    MatMenuModule , 
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
