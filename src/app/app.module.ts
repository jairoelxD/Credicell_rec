import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccesoriosComponent } from './pages/accesorios/accesorios.component';
import { ExplorarprodComponent } from './pages/explorarprod/explorarprod.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { DetalleComponent } from './pages/detalle/detalle.component'; // standalone
import { CarritoComponent } from './pages/carrito/carrito.component'; // standalone
import { FormularioPagoComponent } from './pages/formulario-pago/formulario-pago.component'; // standalone

@NgModule({
  declarations: [
    AppComponent,
    AccesoriosComponent,
    ExplorarprodComponent,
    FooterComponent,
    NavbarComponent
    // NO declares standalone components aquí
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DetalleComponent,        // Import standalone components aquí
    CarritoComponent,
    FormularioPagoComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
