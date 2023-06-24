import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IMCAdultosComponent } from './components/imc-adultos/imc-adultos.component';
import { IMCInfantilComponent } from './components/imc-infantil/imc-infantil.component';
import { PesoIdealComponent } from './components/peso-ideal/peso-ideal.component';

const routes: Routes = [
  { path: "", redirectTo: "Inicio", pathMatch: "prefix" },
  { path: 'Inicio', component: HomeComponent },
  { path: 'IMCAdultos', component: IMCAdultosComponent}, 
  { path: 'IMCNiños', component: IMCInfantilComponent}, 
  { path: 'PesoIdeal', component: PesoIdealComponent}, 
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
