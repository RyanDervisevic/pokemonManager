import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonsRoutingModule } from './pokemons-routing.module';
import { PokemonsComponent } from './pokemons.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PokemonsComponent,
        PokemonComponent,
    ],
    imports: [
        CommonModule,
        PokemonsRoutingModule,
        NgxPaginationModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class PokemonsModule {
}
