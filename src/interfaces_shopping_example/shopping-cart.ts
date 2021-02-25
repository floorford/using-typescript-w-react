import { IOrder } from "./calculate-total-amount";

// implements means it has to follow the rules of the Interface
export class ShoppingCart implements IOrder {
  calculateTotal() {
    return 100;
  }
}
