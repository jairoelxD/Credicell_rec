import { Injectable } from '@angular/core';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  private supabase: SupabaseClient;

  constructor() {
    this.supabase = createClient(
      'https://vbzudvvlhojeuhwtcani.supabase.co', // Tu URL
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZienVkdnZsaG9qZXVod3RjYW5pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM2NTQwMjcsImV4cCI6MjA2OTIzMDAyN30.EbEKtUQtC352vDaonNLKeh7nuyQPbJms84MBELe56pg' // Tu clave pública
    );
  }

  async insertarPedido(data: { nombre: string; telefono: string; correo: string; carrito: any }) {
    const fechaEnvio = new Date().toISOString();
    const pedidoConFecha = { ...data, fecha: fechaEnvio };

    const { error } = await this.supabase
      .from('pedidos')
      .insert([pedidoConFecha]);

    if (error) {
      console.error('Error al insertar pedido:', error);
      throw error;
    }
  }

  async obtenerPedidos() {
    const { data, error } = await this.supabase
      .from('pedidos')
      .select('*')
      .order('fecha', { ascending: false });

    if (error) {
      console.error('Error al obtener pedidos:', error);
      throw error;
    }

    return data;
  }
}
