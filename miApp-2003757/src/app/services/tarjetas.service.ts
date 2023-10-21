import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TarjetasService {
  tarjetas: any[] = [];

  agregarTarjeta(tarjeta: any) {
    this.tarjetas.push(tarjeta);
  }
}