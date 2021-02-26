import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {APP_ROUTES} from "./app.routes";
import {ProductsModule} from "./products/products.module";
import {HomeComponent} from "./home/home.component";

@NgModule({
  imports: [
    BrowserModule,
    ProductsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    HomeComponent,
    AppComponent,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
