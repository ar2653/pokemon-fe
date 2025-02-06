import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PokemonService } from '@/app/services/pokemon-service';
import { loadPokemons, loadPokemonsSuccess, loadPokemonsFailure } from './pokemon.action';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PokemonEffects {
    constructor(private actions$: Actions, private pokemonService: PokemonService) { }
    loadPokemons$ = createEffect(() =>
        this.actions$.pipe(
            ofType(loadPokemons),
            mergeMap(({ limit, offset }) =>
                this.pokemonService.getPokemons(limit, offset).pipe(
                    map((pokemons) => loadPokemonsSuccess({ pokemons })),
                    catchError((error) => of(loadPokemonsFailure({ error: error.message })))
                )
            )
        )
    );
}

