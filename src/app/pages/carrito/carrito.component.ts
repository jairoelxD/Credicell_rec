import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // importa RouterModule


@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [CommonModule, RouterModule],  // agrega RouterModule aquí
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  productos: any[] = [];

  constructor(private carritoService: CarritoService) {}

  ngOnInit() {
    this.productos = this.carritoService.obtenerProductos();
  }

  eliminarProducto(index: number) {
  this.carritoService.eliminarProducto(index);
  this.productos = this.carritoService.obtenerProductos();
}

calcularTotal(): number {
  return this.productos.reduce((sum, item) => sum + item.totalPagar, 0);
}

pagar() {
  alert('Procesando el pago de Bs ' + this.calcularTotal());
  this.vaciarCarrito();
}

  vaciarCarrito() {
    this.carritoService.limpiarCarrito();
    this.productos = [];
  }
  
}


