import React from "react";
import { CartItem, useStateDispatch } from "./AppState";

export interface AddToCartProp {
  addToCart: (item: Omit<CartItem, "quantity">) => void;
}

// putting a type constraint here (extends) as adding the ATC Props is literally the point of this HOC
function AddToCart<OriginalProps extends AddToCartProp>(
  ChildComponent: React.ComponentType<OriginalProps>
) {
  // have to omit the HOC specific Prop (addToCart) from props passed through (e.g PizzaItem Props)
  // otherwise typescript asks you to pass them in as an expected prop where you use the child components
  const AddToCartHOC = (props: Omit<OriginalProps, keyof AddToCartProp>) => {
    // this is a custom hook - we've created it because if setState is undefined we would get an error
    // so we need to check for that, but doing it inside this component is bloaty
    // so we can move that functionality into a custom hook in the AppState file where all the state
    // business logic is and remove the bloat from this file.
    const dispatch = useStateDispatch();
    const handleAddToCart: AddToCartProp["addToCart"] = (item) => {
      dispatch({
        type: "ADD_TO_CART",
        payload: {
          item: item,
        },
      });
    };
    return (
      <ChildComponent
        // have to add an assertion here, otherwise you get an error saying you're using modified OrigProps above
        // so they might not match!
        {...(props as OriginalProps)}
        addToCart={handleAddToCart}
      />
    );
  };

  return AddToCartHOC;
}

export default AddToCart;
