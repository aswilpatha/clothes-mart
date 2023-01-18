import { Injectable } from "@angular/core";
import { LogService } from "@core/log.service";
import { Store } from "@core/store";
import { CartItem } from "./cart-item";
import { CartState, initialState } from "./cart-state";

@Injectable({ providedIn: "root" })
export class CartStore extends Store<CartState> {
  constructor(private logService: LogService) {
    super(initialState);
  }

  addCartItem(cartItemToAdd: CartItem) {
    console.log("[Cart] Add Cart Item");

    const newState = {
      ...this.state, //cartItems
      cartItems: [].concat(this.state.cartItems, cartItemToAdd),
    };

    this.setState(newState);
  }
  clearCart() {
    console.log("[Cart] Clear Cart Item");

    const newState = initialState;

    this.setState(newState);
  }
  restoreCart(stateToRestore: CartState) {
    console.log("[Cart] Restore Cart Item");

    this.setState(stateToRestore);
  }

  removeCartItem(cartItemToRemove: import("./cart-item").CartItem) {
    console.log("[Cart] Remove Cart Item");

    const newState = {
      ...this.state, //cartItems
      cartItems: this.state.cartItems.filter(
        (cartItem) => cartItem.productId != cartItemToRemove.productId
      ),
    };

    this.setState(newState);
  }

  updateCartitem(cartItemToUpdate: CartItem) {
    console.log("[Cart] Update Cart Item");

    const newState = {
      ...this.state, //cartItems
      cartItems: this.state.cartItems.map(
        cartItem =>
          cartItem.productId == cartItemToUpdate.productId
            ? cartItemToUpdate
            : cartItem
      ),
    };

    this.setState(newState);
  }
}
