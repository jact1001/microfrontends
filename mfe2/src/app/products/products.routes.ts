import { Routes } from '@angular/router';
import {AComponent} from "./a/a.component";
import {ProductsComponent} from "./products.component";
import {BComponent} from "./b/b.component";


export const PRODUCTS_ROUTES: Routes = [
  {
    path: '',
    component: ProductsComponent,
    children: [
      {
        path: 'a',
        component: AComponent,
      },
      {
        path: 'b',
        component: BComponent,
      }
    ]
  },
];
