import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract } from '@app/core';
import { CategoriesComponent } from './categories.component';

const routes: Routes = [
  Route.withShell([
    { path: 'productsByCategoryId', component: CategoriesComponent, data: { title: extract('Categories') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class CategoriesRoutingModule { }
