// some type + utility type = new type (transformation)
// list of utility types in the ts docs

// Partial<T> - generic type which takes a generic type parameter T which is an interface
// allows the new version to have all props optional
interface Starship {
  name: string;
  enableHyperjump: boolean;
}

const updateStarship = (id: number, starship: Starship) => {};
// throws an error, as we havent provided both properties in the object
updateStarship(1, { name: "Explorer" });

const updateStarship2 = (id: number, starship: Partial<Starship>) => {};
// Partial allows us to only update one property as the others are considered optional
updateStarship2(1, { name: "Explorer" });

// Required<T>
// makes optional properties required

// Readonly<T>
// makes properties unchangeable

// Record<K,T>
// literally used to make records/maps
const aRecord: Record<string, number> = {
  apples: 10,
  oranges: 20,
  //string: number
};

const starships: Record<string, Starship> = {
  Explorer: {
    name: "Explorer",
    enableHyperjump: true,
  },
  Voyager: {
    name: "Voyager",
    enableHyperjump: false,
  },
};

// Pick<T,K>
// custom version of an existing type, copying over only the props we want into a new type
type StarshipNameOnly = Pick<Starship, "name">;

// Omit<T,K>
// opposite of Pick
type HyperjumpOnly = Omit<Starship, "name">;

// Exclude<T,U>
// subtract one union type from another to creae a new type
type AvailableDrinks = "coffee" | "tea" | "beer" | "wine";
const JohnsDrink: AvailableDrinks = "coffee";

type DrinksJaneDislikes = "coffee" | "wine";
type DrinksJaneLikes = "tea" | "coke zero" | "pina colada";
let JanesDrink: Exclude<AvailableDrinks, DrinksJaneDislikes>;
JanesDrink = "coffee";
JanesDrink = "beer";

// Extract<T,U>
// opposite to Exclude
let JanesOptimalDrink: Extract<AvailableDrinks, DrinksJaneLikes>;
JanesOptimalDrink = "beer";
JanesOptimalDrink = "tea";

// NonNullable<T>
// removes null and undefined from a union type
interface StarshipProperties {
  colour?: "blue" | "red" | "green";
}

function paintStarship(id: number, colour: StarshipProperties["colour"]) {}
// this technically works - but is stupid!
paintStarship(1, undefined);

function paintStarship2(
  id: number,
  colour: NonNullable<StarshipProperties["colour"]>
) {
  return { id, colour };
}
// as it should, this now throws an error!
paintStarship2(1, undefined);

// ReturnType<T>
// T = typeof a function
// returns the type of the function return
type PaintStarshipReturn = ReturnType<typeof paintStarship2>;

// InstanceType<T>
// T = typeof a class

type Constructable<ClassInstance> = new (...args: any) => ClassInstance;

function deletable<BaseClass extends Constructable<{}>>(Base: BaseClass) {
  return class extends Base {
    deleted: boolean;
    delete() {}
  };
}

class Car {
  constructor(public name: string) {}
}

class User {
  constructor(public name: string) {}
}

const deletableCar = deletable(Car);
const deletableUser = deletable(User);

type deletableUserInstance = InstanceType<typeof deletableUser>;
type deletableCarInstance = InstanceType<typeof deletableCar>;

class Profile {
  // how do we describe that the user property is an instance of the deletableUser and not the User
  // can write user: User, but not user: deletableUser
  user: deletableUserInstance;
  car: deletableCarInstance;
}

const userProfile = new Profile();
userProfile.user = new deletableUser("John");
userProfile.car = new deletableCar("Ferrari");

// ThisType<T>
// marker which allows us to specify the type of the this keyword in an object
interface myObject {
  sayHello(): void;
}

interface MyObjectThis {
  helloWorld(): string;
}

const myObject: myObject & ThisType<MyObjectThis> = {
  sayHello() {
    return this.helloWorld();
  },
};

myObject.sayHello = myObject.sayHello.bind({
  helloWorld() {
    return "Hello World!";
  },
});

myObject.sayHello();
