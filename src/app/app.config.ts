import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { BrowserModule } from '@angular/platform-browser';

import { routes } from './app.routes';

import { pokemonReducer } from './state/pokemon/pokemon.reducer';
import { PokemonEffects } from './state/pokemon/pokemon.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideStore({ pokemons: pokemonReducer }),
    provideEffects(PokemonEffects),
    provideHttpClient(withInterceptorsFromDi()),
    importProvidersFrom(
      BrowserModule
    )
  ]
};
