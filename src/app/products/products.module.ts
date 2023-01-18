import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProductsRoutingModule } from "./products-routing.module";
import { ProductsComponent } from "./products/products.component";
import { ProductDateService } from "../core/products/product-date.service";
import { HttpClientModule } from "@angular/common/http";
import { CmMaterialModule } from "../shared/material-module";

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, ProductsRoutingModule, HttpClientModule, CmMaterialModule],
  providers: [ProductDateService]
})
export class ProductsModule {}
