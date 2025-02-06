import { Routes } from '@angular/router';
import { PokemonListComponent } from '@/app/components/pokemon-list/pokemon-list.component'

export const routes: Routes = [
    { path: '', redirectTo: 'pokemons', pathMatch: 'full' },
    { path: 'pokemons', component: PokemonListComponent }
];
