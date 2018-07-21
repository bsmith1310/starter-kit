import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws5Component } from './ws5.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws5', component: Ws5Component, data: { title: extract('ws5') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws5RoutingModule { }
