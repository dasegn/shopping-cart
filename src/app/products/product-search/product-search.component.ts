import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '@shop-cart/core/services/api.service';
import { Product } from '@shop-cart/models/product.model';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})

export class ProductSearchComponent implements OnInit {
  public query: string;
  public products: Product[] = [];

  constructor(private api: ApiService,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.query = params.get('query');
      this.getProducts();
    });
  }

  getProducts() {
    this.products = [];
    this.api.setEndpoint('endpoint')
    .setAction(`/products?q=${this.query}`)
    .setReqMethod('GET')
    .makeCall().subscribe( (response: any) => {
        for (const product of response) {
          this.products.push(new Product(product));
        }
    });
  }



}
