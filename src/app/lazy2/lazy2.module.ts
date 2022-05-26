import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Lazy2RoutingModule } from './lazy2-routing.module';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    MainComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Lazy2RoutingModule
  ]
})
export class Lazy2Module { }
