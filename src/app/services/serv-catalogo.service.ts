import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro } from '../interfaces/libro';
import { environment } from 'src/environments/environment';


@Injectable({
    providedIn: 'root'
})
export class ServCatalogoService {
    rutaJson = `${environment.apiURL}/catalogo`;

    constructor(private http: HttpClient) {

    }

    getAll(): Observable<Libro[]> {
        return this.http.get<Libro[]>(this.rutaJson);
    }

    getLibro(idRecibida: number): Observable<Libro> {
        console.log("Id enviada", idRecibida);
        return this.http.get<Libro>(`${environment.apiURL}/catalogo/${idRecibida}`)
    }
}
