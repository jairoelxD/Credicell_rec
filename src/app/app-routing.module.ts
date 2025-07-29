import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExplorarprodComponent } from './pages/explorarprod/explorarprod.component';  
import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { CarritoComponent } from './pages/carrito/carrito.component'; 
import { FormularioPagoComponent } from './pages/formulario-pago/formulario-pago.component';


const routes: Routes = [
  { path: 'explorarprod', component: ExplorarprodComponent },
  { path: 'accesorios', component: AccesoriosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: 'pago', component: FormularioPagoComponent },


  // Ruta para detalle con parámetro id y cargando el componente standalone
  { 
    path: 'detalle/:id', 
    loadComponent: () => import('./pages/detalle/detalle.component').then(m => m.DetalleComponent) 
  },

  { path: '**', component: ExplorarprodComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
