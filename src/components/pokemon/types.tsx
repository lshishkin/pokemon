export interface PokemonInterface {
    name: string;
    types?: TypePokemonInterface[];
    abilities?: AbilityPokemonInterface[];
    url?: string;
}

export interface PokemonReducerInterface {
    pokemon: PokemonInterface | null;
}

export interface TypePokemonInterface {
    type: { name: string };
}
export interface AbilityPokemonInterface {
    ability: {
        name: string;
        url: string;
    }
}
