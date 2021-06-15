import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../services/pokemon.service';
import { NamedApiResult } from '../interfaces/named-api-result';

@Component({
  selector: 'app-generation',
  templateUrl: './generations.component.html',
  styleUrls: ['./generations.component.sass']
})
export class GenerationsComponent implements OnInit {

  generations$: NamedApiResult[] = null;

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.pokemonService.getGenerations().subscribe(results => {
      this.generations$ = results.results;
    });
  }

}
