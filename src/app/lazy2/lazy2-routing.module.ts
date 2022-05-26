import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
  { path: '', component: MainComponent, children: [
    { path: 'child', component: ChildComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Lazy2RoutingModule { }
