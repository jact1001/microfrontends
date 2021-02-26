import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { RouterModule } from '@angular/router';
import { endsWith } from './router.utils';
import {APP_ROUTES} from "./app.routes";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AComponent,
    BComponent,
    AppComponent
  ],
  providers: [],
  bootstrap: []
})
export class AppModule {
  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const ce = createCustomElement(AppComponent, {injector: this.injector});
    customElements.define('mfe3-element', ce);
  }

}
