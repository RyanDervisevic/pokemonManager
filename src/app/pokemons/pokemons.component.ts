import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../interfaces/pokemon';
import { ApiResult } from '../interfaces/api-result';
import { switchMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
    selector: 'app-pokemons',
    templateUrl: './pokemons.component.html',
    styleUrls: ['./pokemons.component.sass']
})
export class PokemonsComponent implements OnInit {
    apiResult$: ApiResult = null;
    allPokemons: Pokemon[] = [];
    pokemons: Pokemon[] = [];
    selectedPokemon: Pokemon = null;
    pokemonSearchForm = '';
    rickrolled = false;

    currentPage = 1;

    constructor(private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
       this.getPokemons(0);
    }

    getPokemons(offset: number): void {
        this.pokemonService.getPokemons(offset).subscribe(results => {
            this.apiResult$ = results;

            // Fetch Pokemon details
            this.apiResult$.results.map(result => {
                if (result.url.endsWith('/')) {
                    result.url = result.url.slice(0, result.url.length - 1);
                }

                const id = result.url.slice(result.url.lastIndexOf('/') + 1, result.url.length + 1);
                this.allPokemons = [];
                this.pokemons = [];
                this.pokemonService.getPokemon(id).subscribe(pokemon => {
                    this.allPokemons.push(pokemon);
                    this.pokemons.push(pokemon);

                    this.allPokemons.sort((a, b) => a.id - b.id);
                    this.pokemons.sort((a, b) => a.id - b.id);
                });
            });
        });
    }

    onClick(pokemon: Pokemon): void {
        this.selectedPokemon = pokemon;
    }

    search(name: string): void {
        this.pokemons = this.allPokemons.filter(pokemon => pokemon.name.toUpperCase().includes(name.toUpperCase()));
        this.rickrolled = name === 'rick';
    }

    cancelSearch(): void {
        this.pokemons = this.allPokemons;
        this.pokemonSearchForm = '';
    }

    onPageChange($event: number): void {
        const maxSize = this.apiResult$.count / 20;
        if ($event === 0) {
            this.currentPage = 1;
        } else if ($event > maxSize) {
            this.currentPage = maxSize;
        } else {
            this.currentPage = $event;
        }

        this.getPokemons(20 * (this.currentPage - 1));
    }
}
