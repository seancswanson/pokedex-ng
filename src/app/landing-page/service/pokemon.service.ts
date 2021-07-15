import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonResponse } from 'src/app/interfaces';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = 'https://pokeapi.co/api/v2/';
  private offsetAmount: number = 0;
  private offsetParameter: string = 'offset='

  private pokemonEndpoint: string = this.baseUrl + 'pokemon' + '?';

  constructor(
    private http: HttpClient
  ) { }

  public getPokemon(offsetAmount:number): Observable<PokemonResponse> {
    const pokemon$ = this.http.get<PokemonResponse>(this.pokemonEndpoint + this.offsetParameter + offsetAmount);
    pokemon$.subscribe(o => {
      console.log(o);
    });
    return pokemon$;
  }
}
