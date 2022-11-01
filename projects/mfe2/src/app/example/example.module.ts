import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { Example1Component } from './example1/example1.component';
import { LazyComponent } from './lazy/lazy.component';


@NgModule({
  declarations: [
    Example1Component,
    LazyComponent
  ],
  imports: [
    CommonModule,
    ExampleRoutingModule
  ]
})
export class ExampleModule { }
