import React, { createContext, useContext, useEffect, useReducer } from "react";

export interface CartItem {
  name: string;
  price: number;
  id: number;
  quantity: number;
}

interface AppStateValue {
  cart: {
    items: CartItem[];
  };
}

const defaultState: AppStateValue = {
  cart: {
    items: [],
  },
};

// the state object of our entire app
export const AppStateContext = createContext(defaultState);
export const AppDispatchContext = createContext<
  React.Dispatch<AddToCartAction> | undefined
>(undefined);

interface Action<T> {
  type: T;
}

interface AddToCartAction extends Action<"ADD_TO_CART"> {
  payload: {
    item: Omit<CartItem, "quantity">;
  };
}

interface InitialiseCartAction extends Action<"INITIALISE_CART"> {
  payload: {
    cart: AppStateValue["cart"];
  };
}

const reducer = (
  state: AppStateValue,
  action: AddToCartAction | InitialiseCartAction
) => {
  if (action.type === "ADD_TO_CART") {
    const itemToAdd = action.payload.item;
    const itemExists = state.cart.items.find(
      (item) => item.id === itemToAdd.id
    );

    return {
      ...state,
      cart: {
        ...state.cart,
        items: itemExists
          ? state.cart.items.map((item) => {
              if (item.id === itemToAdd.id) {
                return { ...item, quantity: item.quantity + 1 };
              }
              return item;
            })
          : [...state.cart.items, { ...itemToAdd, quantity: 1 }],
      },
    };
  } else if (action.type === "INITIALISE_CART") {
    return { ...state, cart: action.payload.cart };
  }
  return state;
};

// this is a custom hook
export const useStateDispatch = () => {
  const dispatch = useContext(AppDispatchContext);

  if (!dispatch) {
    // if dispatch is undefined, we want to throw an error - would occur if it was called outside of the
    // the context Provider we have set up
    throw new Error(
      "usedispatch was called outside of the AppDispatchContext Provider"
    );
  }
  return dispatch;
};

// using a context for state and setState/dispatch is more optimal than using the same one
// context would re render the state when useState occured, causing all children to re render
// by creating 2 contexts - they use each other from a point of reference so only renders when they themselves
// need to, not when they're accidentally triggered by the other.

// component which will share state with app
// wraps our app component tree so that the app and all children have access to the state object
const AppStateProvider: React.FC = ({ children }) => {
  // useState returns a tuple;
  const [state, dispatch] = useReducer(reducer, defaultState);

  useEffect(() => {
    const cart = window.localStorage.getItem("cart");
    if (cart) {
      dispatch({
        type: "INITIALISE_CART",
        payload: { cart: JSON.parse(cart) },
      });
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppStateContext.Provider value={state}>
      <AppDispatchContext.Provider value={dispatch}>
        {children}
      </AppDispatchContext.Provider>
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
