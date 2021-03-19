// we can merge interfaces
// lets pretend this part is coming from an external module we've installed!

interface Cart {
  calculateTotal(): number;
}

// and the below is in our own codebase, we are adding to the Cart interface!

interface Cart {
  x: number;
}

interface Cart {
  calculateTotal(options: { discountCode: number }): number; //overloading the method
}

let myCart: Cart = {
  x: 5,
  calculateTotal(options?: { discountCode: number }) {
    if (options && options.discountCode) {
      // apply discount
    }
    return 1;
  },
};

// we can merge namespaces
// lets pretend this part is coming from an external module we've installed!

namespace MyNameSpace {
  export const x: number = 10;
  export interface SomeInterface {
    y: number;
  }
}

namespace MyNameSpace {
  export const getX = () => X;
  export interface SomeInterface {
    x: number; // now the interface will include x & y
  }
}

// we can add properties to a function by using a namespace with the same name
function someFunction() {
  return 10;
}

namespace someFunction {
  export const someProperty = 10;
}

someFunction.someProperty;

// namescape can add static members to enums
enum Vegetables {
  Tomato = "tomato",
  Onion = "onion",
}

namespace Vegetables {
  export function makeSalad() {
    return Vegetables.Tomato + Vegetables.Onion;
  }
}

const salad = Vegetables.makeSalad();

// namespace can add static members to a class
class Salad {}

namespace Salad {
  export const availableDressings = ["olive oil", "ranch"];
}

Salad.availableDressings.includes("olive oil");
