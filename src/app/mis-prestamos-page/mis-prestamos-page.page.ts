import { Component, OnInit } from '@angular/core';
import { ServMisPrestamosService } from '../service1/serv-mis-prestamos.service';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  librosEnPrestamo: any;
  constructor(private servicePrestado : ServMisPrestamosService) {
  }

  ngOnInit() {
    this.librosEnPrestamo = (this.servicePrestado.getAll());
  }

  deleteLibro(libro : any){
    this.servicePrestado.delete(libro);
  }
}
