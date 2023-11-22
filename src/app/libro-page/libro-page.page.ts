import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { ServMisPrestamosService } from '../service1/serv-mis-prestamos.service';
import { Libro } from '../interfaces/libro';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {
  idRecibida: number;
  libroRecibido!: Libro;
  constructor(private router: ActivatedRoute, private serviceCatalogo: ServCatalogoService, private servicesPrestamo: ServMisPrestamosService, private route: Router, private toastController: ToastController) {
    this.idRecibida = 0;
  }

  ngOnInit() {
    this.getLibro();
  }

  getLibro() {
    this.router.params.subscribe(params => { this.idRecibida = params['id'] });
    console.log("Id recibida de catalogo", this.idRecibida);
    this.serviceCatalogo.getLibro(this.idRecibida).subscribe(libro => {
      if (libro) {
        this.libroRecibido = libro;
      } else {
        this.presentToast('bottom', 'El libro seleccionado no ha sido encontrado');
      }
    })
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 600,
      position: position,
    });


    await toast.present();
  }

  prestamoLibro() {
    this.servicesPrestamo.addLibroPrestado(this.libroRecibido)
      .subscribe(() => { });
    this.presentToast('bottom', 'El libro ha sido añadido con exito')
    this.route.navigate(['mis-prestamos-page']);
  }
}
