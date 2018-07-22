import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws6Component } from './ws6.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws6', component: Ws6Component, data: { title: extract('ws6') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws6RoutingModule { }
