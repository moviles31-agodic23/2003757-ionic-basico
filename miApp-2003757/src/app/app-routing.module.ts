import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TarjetasComponent } from './tarjetas/tarjetas.component';
import { AgregarTarjetasComponent } from './agregar-tarjetas/agregar-tarjetas.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tarjetas',
    component: TarjetasComponent
  },
  {
    path: 'agregar-tarjetas',
    component: AgregarTarjetasComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
