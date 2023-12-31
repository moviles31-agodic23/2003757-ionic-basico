import { Component, OnInit } from '@angular/core';
import { TarjetasComponent } from '../tarjetas/tarjetas.component';
import { TarjetasService } from '../services/tarjetas.service';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';



@Component({
  selector: 'app-agregar-tarjetas',
  templateUrl: './agregar-tarjetas.component.html',
  styleUrls: ['./agregar-tarjetas.component.scss'],
})
export class AgregarTarjetasComponent  implements OnInit {


  constructor(private tarjetasService: TarjetasService, private router: Router) { }

  ngOnInit() {}

  tarjetas = this.tarjetasService.tarjetas;
  usuario = this.tarjetasService.usuarios;

  irAAgregar(){

    this.router.navigate(['/tarjetas']);
  
}

}
