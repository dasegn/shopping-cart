import { Deserializable } from './deserializable.interface';

// User Model
export class User implements Deserializable {
  public id: number;
  public email: string;
  public lastName: string;
  public firstName: string;
  public password?: string;

  constructor(user: any = {}) {
    this.id = user.id;
    this.email = user.email;
    this.lastName = user.lastName;
    this.firstName = user.firstName;
    this.password = user.password;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  deserialize(input: any): this {
    Object.keys(input).filter(key => this.hasOwnProperty(key))
          .forEach(key => this[key] = input[key]);
    return this;
  }
}
