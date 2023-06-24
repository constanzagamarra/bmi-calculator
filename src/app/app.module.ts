import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IMCAdultosComponent } from './components/imc-adultos/imc-adultos.component';
import { IMCInfantilComponent } from './components/imc-infantil/imc-infantil.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//Componentes angular material
import {MatIconModule} from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    IMCAdultosComponent,
    IMCInfantilComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  
    BrowserAnimationsModule, 
    MatIconModule , 
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
