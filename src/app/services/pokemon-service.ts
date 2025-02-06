import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

@Injectable({ providedIn: 'root' })
export class PokemonService {
    private apiUrl = 'http://localhost:3000/api/pokemons';

    constructor(private http: HttpClient) { }

    getPokemons(limit: number, offset: number): Observable<Pokemon[]> {
        return this.http.get<Pokemon[]>(`${this.apiUrl}?limit=${limit}&offset=${offset}`);
    }
}