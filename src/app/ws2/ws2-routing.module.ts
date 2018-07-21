import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws2Component } from './ws2.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws2', component: Ws2Component, data: { title: extract('ws2') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws2RoutingModule { }
