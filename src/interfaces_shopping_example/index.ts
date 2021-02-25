import { calculateTotalAmount } from "./calculate-total-amount";
import { ShoppingCart } from "./shopping-cart";

// by using the IOrder interface we have instrically linked 2 modules without them having to
// know anything about each other
const cart = new ShoppingCart();
console.log(`The cart's total is ${calculateTotalAmount(cart)}`);

const order = new Order();
console.log(`The order's total is ${calculateTotalAmount(order)}`);
