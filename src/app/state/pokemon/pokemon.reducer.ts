import { createReducer, on } from '@ngrx/store';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from '../pokemon/pokemon.action';
import { Pokemon } from '@/app/models/pokemon.model';

// Define State Interface
export interface PokemonState {
    pokemons: Pokemon[];
    loading: boolean;
    error: string | null;
}

// Initial State
const initialState: PokemonState = {
    pokemons: [],
    loading: false,
    error: null
};

// Reducer Function
export const pokemonReducer = createReducer(
    initialState,
    on(loadPokemons, (state) => ({ ...state, loading: true, error: null })),
    on(loadPokemonsSuccess, (state, { pokemons }) => ({ ...state, pokemons, loading: false })),
    on(loadPokemonsFailure, (state, { error }) => ({ ...state, loading: false, error }))
);
