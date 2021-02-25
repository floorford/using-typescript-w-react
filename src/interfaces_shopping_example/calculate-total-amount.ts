export interface IOrder {
  // order interface has just one method
  calculateTotal(): number;
}

export function calculateTotalAmount(order: IOrder) {
  let total = order.calculateTotal();

  const discount = total * 0.1;
  total -= discount;
  // subtract discount from total

  const tax = total * 0.2;
  total += tax;
  // add taxes

  return total;
}
