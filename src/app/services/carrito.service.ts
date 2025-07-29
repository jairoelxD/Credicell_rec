import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private productos: any[] = [];

  agregarProducto(producto: any) {
    const index = this.productos.findIndex(p => p.nombre === producto.nombre);
    if (index !== -1) {
      this.productos[index].cantidad += producto.cantidad;
    } else {
      this.productos.push(producto);
    }
  }

  obtenerProductos() {
    return this.productos;
  }

  eliminarProducto(index: number) {
    this.productos.splice(index, 1);
  }

  limpiarCarrito() {
    this.productos = [];
  }

  calcularTotal(): number {
    return this.productos.reduce((sum, item) => sum + item.totalPagar, 0);
  }
}
