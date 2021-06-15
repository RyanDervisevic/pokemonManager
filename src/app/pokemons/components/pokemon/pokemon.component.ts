import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../interfaces/pokemon';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
    selector: 'app-pokemon',
    templateUrl: './pokemon.component.html',
    styleUrls: ['./pokemon.component.sass']
})
export class PokemonComponent implements OnInit {
    @Input() pokemon: Pokemon = null;

    constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
    }

    ngOnInit(): void {
        if (this.pokemon === null) {
            this.getPokemon(this.route.snapshot.paramMap.get('id'));
        }
    }

    getPokemon(id: string): void {
        this.pokemonService.getPokemon(id).subscribe(pokemon => this.pokemon = pokemon);
    }
}
