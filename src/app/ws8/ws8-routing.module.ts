import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws8Component } from './ws8.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws8', component: Ws8Component, data: { title: extract('ws8') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws8RoutingModule { }
