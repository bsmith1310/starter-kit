import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws1Component } from './ws1.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws1', component: Ws1Component, data: { title: extract('ws1') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws1RoutingModule { }
