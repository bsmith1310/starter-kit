import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ZnodePlpComponent } from './znode-plp.component';

const routes: Routes = [
  Route.withShell([
    { path: 'znodeplp', component: ZnodePlpComponent, data: { title: extract('Znodeplp') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ZnodePlpRoutingModule { }
