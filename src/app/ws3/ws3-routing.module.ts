import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws3Component } from './ws3.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws3', component: Ws3Component, data: { title: extract('ws3') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws3RoutingModule { }
