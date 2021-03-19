// How to use generics within functions, interfaces and classes

// Generic Functions: 2 ways of writing the same thing
// generic type parameters in the <>
function genericFunction<T>(x: T): T {
  return x;
}

const genericArrowFunction = <T>(x: T): T => x;

// Generic Interfaces
interface GenericInterface<T> {
  (a: T): T; // method/call signature description
  someProp: T; // property description
}

interface GenericInterface<T> {
  // takes the parameter U and uses it to describe its arguments and return type
  <U>(a: U): U; // call signature description
  someProp: T;
}

// Generic Classes
class GenericClass<P> {
  constructor(public props: P) {}

  getProps(): P {
    return this.props;
  }
}

// cakes generic example
interface Expirable {
  expiryDate: Date;
}
interface ChocolateCake extends Expirable {}
interface VanillaCake extends Expirable {}

// an array for each cake type
const chocCakes: ChocolateCake[] = [{ expiryDate: new Date() }];
const vanillaCakes: ChocolateCake[] = [{ expiryDate: new Date() }];

interface GetExpiredItemsFunction {
  // defining the call signature of the function below
  <Item extends Expirable>(items: Array<Item>): Array<Item>;
  //<generic type params>(arguments: their type):type of whats returned
}

// generics has allowed us to create a typesafe function which has only one constraint - the expiry date
// we can use this for ANY item array as long as they have that one property
const getExpiredItems: GetExpiredItemsFunction = (items) => {
  // timestamp in ms
  const currentDate = new Date().getTime();

  return items.filter((item) => item.expiryDate.getDate() < currentDate);
};

const expiredChocCakes = getExpiredItems<ChocolateCake>(chocCakes);
const expiredVanillaCakes = getExpiredItems<VanillaCake>(vanillaCakes);

// shopping cart generics example
interface ShoppingCart<ItemId, Item> {
    items: Array<Item>,
    addItem: (this: ShoppingCart<ItemId, Item>, item: Item): void;
    getItemById(this: ShoppingCart<ItemId, Item>, id: ItemId): Item | undefined
}

interface Item {
    id: number;
    name: string;
    price: number;
}

const cart: ShoppingCart<number, Item> = {
    items: [],
    addItem(item) {
        this.items.push(item)
    },
    getItemById(id) {
        return this.items.find(item => item.id === id)
    }
}
