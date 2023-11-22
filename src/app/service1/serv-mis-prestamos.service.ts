import { Injectable } from '@angular/core';
import { Libro } from '../interfaces/libro';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ServMisPrestamosService {
  rutaJson = `${environment.apiURL}/librosPrestados`;

  constructor(private http: HttpClient, private router : Router) {
    
  }

  getAll() : Observable<Libro[]>{
    return this.http.get<Libro[]>(`${environment.apiURL}/librosPrestados`);
  }

  addLibroPrestado(nuevoLibro: Libro): Observable<Libro> {
    return this.http.post<Libro>(`${environment.apiURL}/librosPrestados`,nuevoLibro);
    
  }

  delete(idRecibida : number) : Observable<Libro> {    
    return this.http.delete<Libro>(`${environment.apiURL}/librosPrestados/${idRecibida}`);
  }
}
