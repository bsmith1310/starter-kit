import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { ZnodeHomeComponent } from './znodeHome.component';

const routes: Routes = [
  Route.withShell([
    { path: 'znodehome', component: ZnodeHomeComponent, data: { title: extract('Znodehome') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ZnodeHomeRoutingModule { }
