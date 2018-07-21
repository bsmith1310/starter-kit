import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Myplp3Component } from './myplp3.component';

const routes: Routes = [
  Route.withShell([
    { path: 'myplp3', component: Myplp3Component, data: { title: extract('Plp3') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Myplp3RoutingModule { }
