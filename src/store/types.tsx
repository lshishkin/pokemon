import { AbilityReducerInterface } from '../components/ability/types'
import { PokemonReducerInterface } from '../components/pokemon/types'
import { PokemonsReducerInterface } from '../components/pokemons/types'

export interface IApplicationState {
  pokemons: PokemonsReducerInterface;
  pokemon: PokemonReducerInterface;
  ability: AbilityReducerInterface;
}
