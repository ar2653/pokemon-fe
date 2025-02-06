import { createFeatureSelector, createSelector } from '@ngrx/store';
import { PokemonState } from './pokemon.reducer';

export const selectPokemonState = createFeatureSelector<PokemonState>('pokemons');

export const selectPokemons = createSelector(selectPokemonState, (state) => state.pokemons);
export const selectLoading = createSelector(selectPokemonState, (state) => state.loading);
export const selectError = createSelector(selectPokemonState, (state) => state.error);
