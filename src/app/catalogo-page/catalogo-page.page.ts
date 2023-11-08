import { Component, OnInit } from '@angular/core';
import { ServCatalogoService } from '../services/serv-catalogo.service';

@Component({
  selector: 'app-catalogo-page',
  templateUrl: './catalogo-page.page.html',
  styleUrls: ['./catalogo-page.page.scss'],
})
export class CatalogoPagePage implements OnInit {
  catalogo: any[];
  constructor(private servicioBiblioteca: ServCatalogoService) {
    this.catalogo = this.servicioBiblioteca.getAll();
  }

  ngOnInit() {


  }


}
