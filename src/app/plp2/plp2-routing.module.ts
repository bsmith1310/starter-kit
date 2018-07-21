import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Plp2Component } from './plp2.component';

const routes: Routes = [
  Route.withShell([
    { path: 'plp2', component: Plp2Component, data: { title: extract('Plp2') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Plp2RoutingModule { }
