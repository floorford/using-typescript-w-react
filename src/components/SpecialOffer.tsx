import React from "react";

import { Pizza } from "./types";
import SpecialCSS from "./SpecialOffer.module.css";
import AddToCart, { AddToCartProp } from "./AddToCart";

interface Props extends AddToCartProp {
  pizza: Pizza;
}

const SpecialOffer: React.FC<Props> = ({ pizza, addToCart }) => {
  const handleAddToCart = () => {
    addToCart({
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
    });
  };

  return (
    <div className={SpecialCSS.container}>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>£{pizza.price}</p>
      <button type="button" onClick={handleAddToCart}>
        Add to Cart
      </button>
    </div>
  );
};

export default AddToCart(SpecialOffer);
