import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { MyhomeComponent } from './myhome.component';

const routes: Routes = [
  Route.withShell([
    { path: 'myhome', component: MyhomeComponent, data: { title: extract('Myhome') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class MyhomeRoutingModule { }
