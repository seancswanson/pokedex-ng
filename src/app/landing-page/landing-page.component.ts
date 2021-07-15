import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonResponse, PokemonResponseResult } from '../interfaces';
import { PokemonService } from './service/pokemon.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  public pokemon$: Observable<PokemonResponse>;
  public currentOffset: number = 0;

  constructor(
    private pokemonService: PokemonService
  ) {
    this.pokemon$ = this.pokemonService.getPokemon(this.currentOffset);
   }

  ngOnInit(): void {
  }

  public goForwardPage(): void {
    this.currentOffset += 20;
    this.pokemon$ = this.pokemonService.getPokemon(this.currentOffset);
  }

  public goBackwardPage(): void {
    if (!this.currentOffset) {
      return;
    }
    this.currentOffset -= 20;
    this.pokemon$ = this.pokemonService.getPokemon(this.currentOffset);
  }
}
