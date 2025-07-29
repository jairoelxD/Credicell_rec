import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../services/supabase.service';
import { CarritoService } from '../../services/carrito.service';

@Component({
  selector: 'app-formulario-pago',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css']
})
export class FormularioPagoComponent {
  nombre: string = '';
  telefono: string = '';
  correo: string = '';
  mensaje: string = '';

  constructor(
    private router: Router,
    private supabaseService: SupabaseService,
    private carritoService: CarritoService
  ) {}

  async enviarFormulario() {
    const horaActual = new Date().getHours();
    let mensajeAlerta = '';

    if (horaActual >= 8 && horaActual < 20) {
      mensajeAlerta = '¡Gracias! En menos de 30 minutos nos contactaremos contigo.';
    } else {
      mensajeAlerta = 'Nuestro horario de atención es de 8:00 AM a 8:00 PM.';
    }

    try {
      const carrito = this.carritoService.obtenerProductos();

      await this.supabaseService.insertarPedido({
        nombre: this.nombre,
        telefono: this.telefono,
        correo: this.correo,
        carrito: carrito
      });

      this.carritoService.limpiarCarrito();

      alert(mensajeAlerta);
      this.router.navigate(['/']);
    } catch (error) {
      alert('Error al enviar los datos. Intenta de nuevo.');
      console.error(error);
    }
  }
}
