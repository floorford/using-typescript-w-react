import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import CartCSS from "./Cart.Module.css";

import { AppStateContext } from "./AppState";

// for a class based component you should describe Props and State explicitly
interface Props {}

interface State {
  isOpen: boolean;
}

class Cart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      isOpen: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  // if you need to physically pass e in here, ts can't type it anymore (any)
  // e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  handleClick() {
    // target = element where event occurs aka currentTarget or its children that you can click
    // currentTarget = element the handler is attached to

    // can use assertions eg e.target as HTMLElement then as HTMLSpanElement within if statements
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <AppStateContext.Consumer>
        {(state) => {
          const itemsCount = state.cart.items.reduce((acc, val) => {
            return acc + val.quantity;
          }, 0);

          return (
            <div className={CartCSS.cartContainer}>
              <button
                className={CartCSS.button}
                type="button"
                onClick={this.handleClick}
              >
                <FiShoppingCart />
                <span>{itemsCount} pizza(s)</span>
              </button>
              <div
                className={CartCSS.cartDropDown}
                style={{ display: this.state.isOpen ? "block" : "none" }}
              >
                <ul>
                  {state.cart.items.map((item) => (
                    <li key={item.id}>
                      {item.name} &times; {item.quantity}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        }}
      </AppStateContext.Consumer>
    );
  }
}

export default Cart;
