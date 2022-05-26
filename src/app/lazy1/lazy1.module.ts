import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { Lazy1RoutingModule } from './lazy1-routing.module';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    MainComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    Lazy1RoutingModule
  ]
})
export class Lazy1Module { }
