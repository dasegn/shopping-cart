import { Product } from './product.model';

// Cart Model
export class Cart {
  public items: Product[] = [];
  public total: number;

  constructor() {
    this.total = 0;
  }
}
