import { Action } from '@ngrx/store';
import { Product } from '@shop-cart/models/product.model';

export const ADD = '[Cart] Add Product';
export const REMOVE = '[Cart] Remove Product';
export const REMOVEALL = '[Cart] Remove All Products';

export class AddAction implements Action {
  readonly type = ADD;
  constructor(public item: Product) {}
}

export class RemoveAction implements Action {
  readonly type = REMOVE;
  constructor(public id: number) {}
}

export class RemoveAllAction implements Action {
  readonly type = REMOVEALL;
}

export type actions =   AddAction |
                        RemoveAction |
                        RemoveAllAction;
