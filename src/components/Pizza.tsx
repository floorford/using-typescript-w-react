import React from "react";
import PizzaCSS from "./Pizza.module.css";

import { useStateDispatch } from "./AppState";

// for a functional component you should describe the component type...
interface Pizza {
  id: number;
  name: string;
  description: string;
  price: number;
}

// ...and its props explicitly
interface Props {
  pizza: Pizza;
}

// React.FC stands for functional component
const Pizza: React.FC<Props> = ({ pizza }) => {
  // this is a custom hook - we've created it because if setState is undefined we would get an error
  // so we need to check for that, but doing it inside this component is bloaty
  // so we can move that functionality into a custom hook in the AppState file where all the state
  // business logic is and remove the bloat from this file.
  const dispatch = useStateDispatch();
  const handleAddToCart = () => {
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        item: {
          id: pizza.id,
          name: pizza.name,
          price: pizza.price,
        },
      },
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

export default Pizza;
