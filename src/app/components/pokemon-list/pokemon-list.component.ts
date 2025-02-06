import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { PokemonState } from '@/app/state/pokemon/pokemon.reducer'
import { loadPokemons } from '@/app/state/pokemon/pokemon.action';
import { selectPokemons, selectLoading, selectError } from '@/app/state/pokemon/pokemon.selector';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-pokemon-list',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent {
  private store = inject(Store<PokemonState>);

  pokemons = this.store.selectSignal(selectPokemons);
  loading = this.store.selectSignal(selectLoading);
  error = this.store.selectSignal(selectError);

  loadPokemon() {
    this.store.dispatch(loadPokemons({ limit: 200, offset: 0 }));
  }
}
