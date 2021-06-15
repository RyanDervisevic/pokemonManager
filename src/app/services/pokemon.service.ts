import { Injectable } from '@angular/core';
import { Pokemon } from '../interfaces/pokemon';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiResult } from '../interfaces/api-result';

@Injectable({
    providedIn: 'root'
})
export class PokemonService {
    url = 'https://pokeapi.co/api/v2';

    constructor(private http: HttpClient) {
    }

    get(url: string): Observable<any> {
        return this.http.get<any>(url);
    }

    getPokemons(offset?: number): Observable<ApiResult> {
        return this.http.get<ApiResult>(`${this.url}/pokemon?offset=${offset || 0}`);
    }

    getPokemon(id: string): Observable<Pokemon> {
        return this.http.get<Pokemon>(`${this.url}/pokemon/${id}`);
    }

    getGenerations(): Observable<ApiResult> {
        return this.http.get<ApiResult>(`${this.url}/generation`);
    }
}
