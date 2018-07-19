import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { PlpComponent } from './plp.component';

const routes: Routes = [
  Route.withShell([
    { path: 'plp', component: PlpComponent, data: { title: extract('Plp') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PlpRoutingModule { }
