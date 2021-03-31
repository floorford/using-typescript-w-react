import React from "react";
import { FiShoppingCart } from "react-icons/fi";

import CartCSS from "./Cart.Module.css";

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
  }

  render() {
    return (
      <div className={CartCSS.cartContainer}>
        <button
          className={CartCSS.button}
          type="button"
          onClick={() => this.setState({ isOpen: !this.state.isOpen })}
        >
          <FiShoppingCart />
          <span>2 pizza(s)</span>
        </button>
        <div
          className={CartCSS.cartDropDown}
          style={{ display: this.state.isOpen ? "block" : "none" }}
        >
          <ul>
            <li>pizza 1</li>
            <li>pizza 2</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Cart;
