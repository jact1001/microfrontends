import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PRODUCTS_ROUTES } from './products.routes';
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";
import {ProductsComponent} from "./products.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(PRODUCTS_ROUTES)
  ],
  declarations: [
    ProductsComponent,
    AComponent,
    BComponent,
  ]
})
export class ProductsModule { }
