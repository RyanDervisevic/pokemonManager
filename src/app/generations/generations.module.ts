import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GenerationsRoutingModule } from './generations-routing.module';
import { GenerationsComponent } from './generations.component';


@NgModule({
  declarations: [
    GenerationsComponent
  ],
  imports: [
    CommonModule,
    GenerationsRoutingModule
  ]
})
export class GenerationsModule { }
