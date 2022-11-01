import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlightsRoutingModule } from './flights-routing.module';
import { LazyComponent } from './lazy/lazy.component';
import { FlightsSearchComponent } from './flights-search/flights-search.component';


@NgModule({
  declarations: [
    LazyComponent,
    FlightsSearchComponent
  ],
  imports: [
    CommonModule,
    FlightsRoutingModule
  ]
})
export class FlightsModule { }
