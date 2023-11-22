import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../service1/serv-mis-prestamos.service';
import { Libro } from '../interfaces/libro';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  librosEnPrestamo!: Libro[];
  constructor(private servicePrestado : ServMisPrestamosService, private router : Router) {
  }

  ngOnInit() {
    this.getAll();
  }

  deleteLibro(idLibro : number){
    this.servicePrestado.delete(idLibro).subscribe(respuesta =>{});
    this.servicePrestado.getAll().subscribe(respuesta => {this.librosEnPrestamo = respuesta});
  }

  getAll(){
    this.servicePrestado.getAll().subscribe(respuesta => {this.librosEnPrestamo = respuesta});
  }
}
