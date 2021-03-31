import React from "react";

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
  return (
    <li>
      <h2>{pizza.name}</h2>
      <p>{pizza.description}</p>
      <p>£{pizza.price}</p>
    </li>
  );
};

export default Pizza;
