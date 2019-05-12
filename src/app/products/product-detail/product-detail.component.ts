import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from '@shop-cart/core/services/api.service';
import { Product } from '@shop-cart/models/product.model';
import { AppState } from '@shop-cart/app.reducers';
import * as fromCart from '@shop-cart/cart/store/cart.actions';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})

export class ProductDetailComponent implements OnInit, OnDestroy {
  private productId: string;
  public product: Product;

  constructor(private api: ApiService,
              private router: Router,
              private route: ActivatedRoute,
              private store: Store<AppState>) { }

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.getProduct();
  }

  ngOnDestroy() {

  }

  getProduct() {
    this.api.setEndpoint('endpoint')
    .setAction(`/products/${this.productId}`)
    .setReqMethod('GET')
    .makeCall().subscribe( (response: any) => {
      this.product = new Product(response);
    });
  }

  addToCart() {
    const action = new fromCart.AddAction(this.product);
    this.store.dispatch(action);
  }

  backToStore() {
    this.router.navigate(['/']);
  }

}
