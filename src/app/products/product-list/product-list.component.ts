import { Component, OnInit, OnDestroy } from '@angular/core';
import { ApiService } from '@shop-cart/core/services/api.service';
import { Product } from '@shop-cart/models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {
  public products: Product[] = [];

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.getProducts();
  }

  ngOnDestroy() {
  }

  getProducts() {
    this.api.setEndpoint('endpoint')
    .setAction('/products')
    .setReqParams({})
    .setReqMethod('GET')
    .makeCall().subscribe( (response: any) => {
        for (const product of response) {
          this.products.push(new Product(product));
        }
    });
  }

}
