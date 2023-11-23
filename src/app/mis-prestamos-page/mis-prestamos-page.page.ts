import { AfterContentInit, Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ServMisPrestamosService } from '../service1/serv-mis-prestamos.service';
import { Libro } from '../interfaces/libro';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-mis-prestamos-page',
  templateUrl: './mis-prestamos-page.page.html',
  styleUrls: ['./mis-prestamos-page.page.scss'],
})
export class MisPrestamosPagePage implements OnInit {
  librosEnPrestamo!: Libro[];
  constructor(private servicePrestado: ServMisPrestamosService, private router: Router, private loadingControl: LoadingController) {
  }

  ionViewWillEnter() {
    this.getAll();
  }


  ngOnInit() { }


  deleteLibro(idLibro: number) {
    this.servicePrestado.delete(idLibro).subscribe(respuesta => { });
    this.servicePrestado.getAll().subscribe(respuesta => { this.librosEnPrestamo = respuesta });
  }

  getAll() {
    this.showLoading();
    this.servicePrestado.getAll().subscribe(respuesta => { this.librosEnPrestamo = respuesta });
  }

  async showLoading() {
    const loading = await this.loadingControl.create({
      message: 'Cargando...',
      duration: 4000,
    });

    loading.present();
  }
}
