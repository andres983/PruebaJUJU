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

  public buscarPersonajes(query = '', page = 1): Observable<Character[]> {
    const filtro = `${environment.api}${environment.character}?name=${query}&page=${page}`;
    // https://rickandmortyapi.com/api/+character/?name=&page=1
    console.log('*************');
    console.log(filtro);
    console.log('*************');
    return this.http.get<Character[]>(filtro);
  }

  public obtenerDetalle(id: number): Observable<Character> {
    const path = `${environment.api}+${environment.character}/${id}`;
    return this.http.get<Character>(path);
  }
}
