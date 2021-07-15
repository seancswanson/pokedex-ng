export interface PokemonResponse {
  count: number;
  previous: string | null;
  next: string;
  results: PokemonResponseResult[]
}

export interface PokemonResponseResult {
  name: string;
  url: string;
}
