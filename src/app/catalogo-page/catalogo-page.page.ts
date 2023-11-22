import { Component, OnInit } from '@angular/core';
import { ServCatalogoService } from '../services/serv-catalogo.service';

import { Libro } from '../interfaces/libro';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {
  catalogo!: Libro[];
  constructor(private servicioBiblioteca: ServCatalogoService) {
    
  }

  ngOnInit() {
    this.servicioBiblioteca.getAll().subscribe(respuesta => {this.catalogo = respuesta
      console.log(this.catalogo);
    });
    
  }
}
