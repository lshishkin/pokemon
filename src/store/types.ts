import { UserInterface, PokemonInterface } from "../components/pokemons/types";

export interface IApplicationState {
  pokemons: PokemonReducerIntrtface;
  pokemon: any;
  ability: any;
}

export interface PokemonReducerIntrtface {
  pokemons: PokemonInterface[];
  load: boolean;
}
