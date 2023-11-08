import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {
  listaPrestados: any[];

  constructor() {
    this.listaPrestados = [];
  }

  getAll() {
    return this.listaPrestados;
  }

  add(libroPrestado: any) {
    this.listaPrestados.push(libroPrestado);
  }

  delete(libro: any) {
    var indiceLibro = this.listaPrestados.indexOf(libro);
    this.listaPrestados.splice(indiceLibro, 1);
  }
}
