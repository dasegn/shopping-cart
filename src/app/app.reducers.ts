import { ActionReducerMap } from '@ngrx/store';
import { Product } from '@shop-cart/models/product.model';
import * as fromCart from '@shop-cart/cart/store/cart.reducer';

export interface AppState {
    cart: Product[];
}

export const appReducers: ActionReducerMap<AppState> = {
    cart: fromCart.cartReducer
};
