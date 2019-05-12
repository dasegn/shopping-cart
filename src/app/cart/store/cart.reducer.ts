import * as fromCart from './cart.actions';
import { Product } from '@shop-cart/models/product.model';

const initState: Product[] = [];

export function cartReducer(state = initState, action: fromCart.actions): Product[] {
    switch (action.type) {
        case fromCart.ADD:
          const product = state.find(item => item.id === action.item.id);
          if ( product === undefined ) {
            const newItem = new Product(action.item);
            return [...state, newItem];
          }
          return state.map( item => {
            item.upQuantity();
            return item;
          });
        case fromCart.REMOVE:
            return state.filter(itemDel => itemDel.id !== action.id);
        case fromCart.REMOVEALL:
            return initState;
        default:
            return state;
    }
}
