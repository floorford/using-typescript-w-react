import React from "react";

import AddToCart, { AddToCartProp } from "./AddToCart";
import PizzaCSS from "./Pizza.module.css";
import { Pizza } from "./types";

// for a functional component you should describe the component type...

// ...and its props explicitly
interface Props extends AddToCartProp {
  pizza: Pizza;
}

// React.FC stands for functional component
const PizzaItem: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };
  return (
    <li className={PizzaCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>£{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </li>
  );
};

export default AddToCart(PizzaItem);
