import React from "react";
import pizzas from "../data/pizzas.json";
import AppCSS from "./App.module.css";

import AppStateProvider from "./AppState";
import PizzSVG from "../svg/pizza.svg";
import PizzaItem from "./Pizza";
import Cart from "./Cart";
import SpecialOffer from "./SpecialOffer";

const App = () => {
  const specialPizza = pizzas.find((pizza) => pizza.specialOffer);
  return (
    <AppStateProvider>
      <div className={AppCSS.container}>
        <div className={AppCSS.header}>
          <PizzSVG width={120} height={120} />
          <div className={AppCSS.siteTitle}>Delicious Pizza</div>
          <Cart />
        </div>
        {specialPizza ? <SpecialOffer pizza={specialPizza} /> : null}
        <ul className={AppCSS.pizzaList}>
          {pizzas
            .filter((pizza) => !pizza.specialOffer)
            .map((pizza) => (
              <PizzaItem key={pizza.id} pizza={pizza} />
            ))}
        </ul>
      </div>
    </AppStateProvider>
  );
};

export default App;
