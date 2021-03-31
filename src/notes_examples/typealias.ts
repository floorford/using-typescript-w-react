// new name for a combo of types
type Alias1 = string | string[] | null; // union type
type Alias2 = { a: number } & { b: number }; // intersection type
type Alias3<T> = T[]; // generic type

// typically used as interfaces -> just describing shape of object and its properties
type Alias4 = {
  a: number;
  b: string;
};

interface Interface {
  a: number;
  b: string;
}

// alias = describes shape of object - create a name which references a shape
// interface = creates a new type

// use interfaces over aliases to describe the shapes of objects
// use aliases to create names of complex types such as above
