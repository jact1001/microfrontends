import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {PagosComponent} from "./pagos.component";
import {PagosRoutingModule} from "./pagos-routing.module";

@NgModule({
  declarations: [PagosComponent],
  imports: [
    CommonModule,
    PagosRoutingModule,
  ],
  exports: [PagosComponent],
})
export class PagosModule {}
