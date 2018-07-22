import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws7Component } from './ws7.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws7', component: Ws7Component, data: { title: extract('ws7') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws7RoutingModule { }
