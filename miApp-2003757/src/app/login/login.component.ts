import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TarjetasService } from '../services/tarjetas.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent  implements OnInit {

  constructor(private router: Router, private tarjetasService: TarjetasService) {}

  ngOnInit() {}

  usuario = {
    username: '',
    password: ''
  }

  admin = {
    username: 'cesar',
    password: 'admin'
  }

  
  redirigirTarjetas() {
    this.router.navigate(['/agregar-tarjetas']);
  }

  buscarUsuario(loginForm : NgForm):void{
    if(this.usuario.username == this.admin.username && this.usuario.password == this.admin.password){
      console.log('Acceso permitido');
      this.tarjetasService.mostrarUsuario({ ...this.usuario});
      this.redirigirTarjetas();
    }else{
      console.log("Credenciales incorrectas");
      console.log(loginForm)
      this.usuario.username = '';
      this.usuario.password = '';
      loginForm.controls['username'].setErrors(null);
      loginForm.controls['username'].markAsPristine();
      loginForm.controls['password'].markAsPristine();
      loginForm.controls['password'].setErrors(null);
      this.mostrarMensajeInvalido = true;
    }
  }

  ocultarMensajeInvalido(): void {
    this.mostrarMensajeInvalido = false;
  }
  
  mostrarMensajeInvalido : boolean = false;
}
