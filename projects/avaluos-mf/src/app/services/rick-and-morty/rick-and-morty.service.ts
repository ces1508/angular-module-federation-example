import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICharacter } from '../../models/character.model';
import { BASE_API_URL } from '../../constants/rick-and-morty';
import { IRickAndMortyResponse } from '../../models/response-rick-and-morty.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class RickAndMortyService {
  constructor(private http: HttpClient) {}

  getAllCharacters(page: number = 1): Observable<IRickAndMortyResponse> {
    console.log(
      `vamos a realizar la peticion a ${BASE_API_URL}/character y la pagina ${page}`
    );
    return this.http.get<IRickAndMortyResponse>(`${BASE_API_URL}/character`, {
      params: { page },
    });
  }
}
