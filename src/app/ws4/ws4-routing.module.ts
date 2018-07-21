import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { Ws4Component } from './ws4.component';

const routes: Routes = [
  Route.withShell([
    { path: 'ws4', component: Ws4Component, data: { title: extract('ws4') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class Ws4RoutingModule { }
