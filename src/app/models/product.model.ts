import { Deserializable } from './deserializable.interface';

// Product Model
export class Product implements Deserializable {
  public id: number;
  public name: string;
  public description: string;
  public price: string;
  public image: string;
  public url: string;
  public quantity: number;

  constructor(product: any = {}) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.image = product.image;
    this.url = product.url;
    this.quantity = 1;
  }

  upQuantity() {
    this.quantity++;
  }

  downQuantity() {
    this.quantity--;
  }

  getPrice() {
    return (Number(this.price) * this.quantity);
  }

  getPriceFormated() {
    return `$${this.getPrice()}`;
  }

  deserialize(input: any): this {
    Object.keys(input).filter(key => this.hasOwnProperty(key))
          .forEach(key => this[key] = input[key]);
    return this;
  }
}
