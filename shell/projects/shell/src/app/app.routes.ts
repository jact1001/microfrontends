import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { WrapperComponent } from "./wrapper/wrapper.component";

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'pagos',
    loadChildren: () => import('../app/pagos/pagos.module').then((mod) => mod.PagosModule),
  },
  {
    path: 'mfe1',
    loadChildren: () => import('mfe1/Module').then(m => m.ProductsModule)
  },
  {
    path: 'mfe2',
    loadChildren: () => import('mfe2/Module').then(m => m.ProductsModule)
  },
  {
    path: 'mfe3',
    component: WrapperComponent,
    data: {
      importName: 'mfe3',
      elementName: 'mfe3-element',
    }
  },
  {
    path: 'mfe4',
    component: WrapperComponent,
    data: {
      importName: 'mfe4',
      elementName: 'mfe4-element',
    }
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

