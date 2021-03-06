import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { CategoriesRoutingModule } from './categories-routing.module';
import { CategoriesComponent } from './categories.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    CategoriesRoutingModule
  ],
  declarations: [
    CategoriesComponent
  ]
})
export class CategoriesModule { }
