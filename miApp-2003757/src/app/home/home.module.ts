import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonInput, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ],
  declarations: [HomePage, TarjetasComponent, AgregarTarjetasComponent]
})
export class HomePageModule {}
