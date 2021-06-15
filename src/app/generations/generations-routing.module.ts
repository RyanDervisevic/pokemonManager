import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerationsComponent } from './generations.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
    { path: '', component: GenerationsComponent, canActivate: [AuthGuard, ], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerationsRoutingModule { }
