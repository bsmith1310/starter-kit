import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { StoreHomeComponent } from './storeHome.component';

const routes: Routes = [
  Route.withShell([
    { path: 'storehome', component: StoreHomeComponent, data: { title: extract('Storehome') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class StoreHomeRoutingModule { }
