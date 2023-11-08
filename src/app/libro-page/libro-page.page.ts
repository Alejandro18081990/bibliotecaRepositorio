import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServCatalogoService } from '../services/serv-catalogo.service';
import { ServMisPrestamosService } from '../service1/serv-mis-prestamos.service';

@Component({
  selector: 'app-libro-page',
  templateUrl: './libro-page.page.html',
  styleUrls: ['./libro-page.page.scss'],
})
export class LibroPagePage implements OnInit {
  id: any;
  libroDetalle: any;
  constructor(private router: ActivatedRoute, private serviceCatalogo: ServCatalogoService, private servicesPrestamo: ServMisPrestamosService,private route: Router) { }

  ngOnInit() {
    this.router.params.subscribe((params) => { this.id = params['id'] })
    this.libroDetalle = this.serviceCatalogo.getLibro(this.id);
  }

  prestamoLibro() {
    this.servicesPrestamo.add(this.libroDetalle);
    this.route.navigate(['/mis-prestamos-page']);
  }
}
