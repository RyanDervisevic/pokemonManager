import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonsComponent } from './pokemons.component';
import { AuthGuard } from '../guards/auth.guard';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
    { path: '', component: PokemonsComponent, canActivate: [AuthGuard, ], },
    { path: 'detail/:id', component: PokemonComponent, },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PokemonsRoutingModule {
}
