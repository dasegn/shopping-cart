import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Product } from '@shop-cart/models/product.model';
import { AppState } from '@shop-cart/app.reducers';
import * as fromCart from '@shop-cart/cart/store/cart.actions';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

export class CartComponent implements OnInit, OnDestroy {
  cart: Product[] = [];
  cartSubs = new Subscription();
  total: number;
  totalItems: number;

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.cartSubs = this.store.subscribe(state => {
      this.cart = state.cart;
      this.calcTotal();
    });
  }

  ngOnDestroy() {
    this.cartSubs.unsubscribe();
  }

  removeAllProducts() {
    const accion = new fromCart.RemoveAllAction();
    this.store.dispatch(accion);
  }

  removeProduct(id: number) {
    const accion = new fromCart.RemoveAction(id);
    this.store.dispatch(accion);
  }

  calcTotal() {
    this.total = 0;
    this.totalItems = 0;
    for (const item of this.cart) {
      this.total = this.total + item.getPrice();
      this.totalItems = this.totalItems + item.quantity;
    }
  }
}
