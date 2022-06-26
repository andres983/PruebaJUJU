import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from 'src/app/core/modelos/Character';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {

  public respuesta = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json; charset=UTF-8' }),
  };

  constructor(private http: HttpClient) { }

  public buscarPersonajes(query = '', gender = '', page = 1): Observable<Character[]> {
    const filtro = `${environment.api}${environment.character}?name=${query}&gender=${gender}&page=${page}`;
    console.log(filtro);
    return this.http.get<Character[]>(filtro);
  }

  public obtenerDetallePersonaje(id: number): Observable<Character> {
    const path = `${environment.api}${environment.character}${id}`;
    return this.http.get<Character>(path);
  }
}
