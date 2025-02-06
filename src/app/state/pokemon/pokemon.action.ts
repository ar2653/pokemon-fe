import { createAction, props } from '@ngrx/store';
import { Pokemon } from '@/app/models/pokemon.model';

export const loadPokemons = createAction('[Pokemon] Load Pokemons', props<{ limit: number, offset: number }>());
export const loadPokemonsSuccess = createAction('[Pokemon] Load Pokemons Success', props<{ pokemons: Pokemon[] }>());
export const loadPokemonsFailure = createAction('[Pokemon] Load Pokemons Failure', props<{ error: string }>());
