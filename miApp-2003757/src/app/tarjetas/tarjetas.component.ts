import { Component, Input, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { AgregarTarjetasComponent } from '../agregar-tarjetas/agregar-tarjetas.component';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { TarjetasService } from '../services/tarjetas.service';



@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.scss'],
})
export class TarjetasComponent  implements OnInit {

  fechaSeleccionada! : string;



  constructor(private router: Router, private tarjetasService: TarjetasService) {  
   }

  ngOnInit() {
  }

  meses: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'];
  mesSeleccionado: string = 'Mes';
  valorAccordion: string = 'A';

  anioActual: number = new Date().getFullYear();
  anios: number[] = Array.from({length: 10}, (_, i) => this.anioActual + i + 1);
  anioSeleccionado: string = 'Año';


  seleccionarMes(mes: string) {
    this.mesSeleccionado = mes;
    this.valorAccordion = this.valorAccordion === 'A' ? 'B' : 'A';
    this.tarjeta.fechaExpiracion = `${this.anioSeleccionado}-${this.mesSeleccionado}`;
  }

  seleccionarAnio(anio: number) {
    this.anioSeleccionado = anio.toString();
    this.valorAccordion = '';
    this.tarjeta.fechaExpiracion = `${this.anioSeleccionado}-${this.mesSeleccionado}`;
  }
  


  validarEntrada(event: any) {
    const input = event.target.value.replace(/\D/g, ''); 
    event.target.value = input.replace(/(\d{4})/g, '$1 ').trim();
    ; 
  }

  

  tarjeta = {
    numeroTarjeta: '',
    CVV: '',
    nombreTitular: '',
    fechaExpiracion: ''
  };
  
  tarjetas: any[] = [];
  
  agregarTarjeta() {
    this.tarjetasService.agregarTarjeta({ ...this.tarjeta });
    console.log(this.tarjetasService.tarjetas);
  }


  redirigir() {
    this.router.navigate(['/agregar-tarjetas']);
  }


}




