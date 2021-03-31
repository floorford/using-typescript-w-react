import React from "react";
import pizzas from "../data/pizzas.json";
import AppCSS from "./App.module.css";

import PizzSVG from "../svg/pizza.svg";
import Pizza from "./Pizza";
import Cart from "./Cart";

const App = () => {
  return (
    <div className={AppCSS.container}>
      <div className={AppCSS.header}>
        <PizzSVG width={120} height={120} />
        <div className={AppCSS.siteTitle}>Delicious Pizza</div>
        <Cart />
      </div>
      <ul>
        {pizzas.map((pizza) => (
          <Pizza key={pizza.id} pizza={pizza} />
        ))}
      </ul>
    </div>
  );
};

export default App;
