import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedRoutingModule } from "./shared-routing.module";
import { RouterModule } from "@angular/router";
import { CmMaterialModule } from "./material-module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FlexLayoutModule } from "@angular/flex-layout";
import { AddToCartComponent } from './cart/add-to-cart/add-to-cart.component';
import { AddToCartDialogComponent } from './cart/add-to-cart-dialog/add-to-cart-dialog.component';
import { CartItemsCountComponent } from './cart/cart-items-count/cart-items-count.component';

@NgModule({
  declarations: [AddToCartComponent, AddToCartDialogComponent, CartItemsCountComponent],
  imports: [CommonModule, SharedRoutingModule, RouterModule, CmMaterialModule],
  exports: [
    CmMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    FlexLayoutModule,
    AddToCartComponent,
    CartItemsCountComponent
  ],
  entryComponents:[AddToCartDialogComponent]
})
export class SharedModule {}
